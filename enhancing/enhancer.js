module.exports = {
  succeed,
  fail,
  repair,
  get,
};

//mvp 

function repair(item) {
  return { ...item, durability: 100 };
}

function succeed(item) {
  const currentEnhancement = item.enhancement;
  if (currentEnhancement < 20) {
    const newEnhancement = currentEnhancement + 1
    return { ...item, enhancement: newEnhancement };
  }
  return { ...item, enhancement: 20 };
}

function fail(item) {
  const currentEnhancement = item.enhancement;
  const currentDurability = item.durability;

  if (currentEnhancement === 15 || currentEnhancement === 16) {
    if (currentDurability - 10 <= 0) {
      return { ...item, durability: 0 }
    }
    return { ...item, durability: currentDurability - 10 }
  }

  else if (currentEnhancement < 15) {
    if (currentDurability - 5 <= 0) {
      return { ...item, durability: 0 }
    }
    return { ...item, durability: (currentDurability - 5) }
  }

  else if (currentEnhancement > 16) {
    if (currentDurability - 1 <= 0) {
      return { ...item, durability: 0 }
    }
    return { ...item, durability: (currentDurability - 1) }
  }
}

//stretch problem 
function get(item) {
  return { ...item };
}

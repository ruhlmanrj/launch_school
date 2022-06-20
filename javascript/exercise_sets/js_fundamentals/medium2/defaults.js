// The following functions use conditional statements to assign values to
// parameters whose arguments were omitted. Both solutions have a limitation
// that can lead to an incorrect result for certain inputs. What is this
// limitation and how does it affect the result?

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// The problem that could be encountered while using these functions would
// be in the case of a `0` passed as an argument for certain parameters.
// Since the parameters are reassigned to a different value if they are falsey
// and `0` is a falsey value, this will lead to parameters that assume `0` to
// be reassigned to a different value than intended in 3 of the 4 cases.

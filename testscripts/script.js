import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
  vus: 10,
  duration: "10m",
  ext: {
    loadimpact: {
      projectID: 3572416,
      // Test runs with the same name groups test runs together
      name: "Product pages performance",
    },
  },
};

const products = new Array("hoodie", "beanie", "belt", "cap", "polo");

export default function () {
  const randomProduct = products[Math.floor(Math.random() + products.length)];
  const response = http.get(
    "http://ecommerce.test.k6.io/product/" + randomProduct
  );

  check(response, {
    "is status 200": (r) => r.status == 200,
    "text verification": (r) => r.body.includes(randomProduct),
  });

  sleep(Math.random() * 5);
}

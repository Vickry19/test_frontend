import * as React from "react";
import { flexboxLayout, label, image, button } from "@nativescript/core";

export function FeaturedProducts() {
  const products = [
    {
      image: "~/images/hp62.jpg",
      title: "HP 62 Black Ink Cartridge",
      code: "(HPCZ104AE)",
      price: "$9.49"
    },
    {
      image: "~/images/canon.jpg",
      title: "Canon MF-3110 Toner",
      code: "(C2104AE)",
      price: "$36.45"
    },
    {
      image: "~/images/hp62-black.jpg",
      title: "HP 62 Black Ink Cartridge",
      code: "(HPCZ104AE)",
      price: "$5.99"
    }
  ];

  return (
    <flexboxLayout className="flex-col p-4">
      <label className="text-xl font-bold text-center mb-4">
        FEATURED PRODUCTS
      </label>
      <flexboxLayout className="justify-around">
        {products.map((product, index) => (
          <flexboxLayout key={index} className="flex-col items-center w-1/3 p-2">
            <image src={product.image} className="w-32 h-32 mb-2" />
            <label className="text-center mb-1">{product.title}</label>
            <label className="text-gray-500 mb-1">{product.code}</label>
            <label className="font-bold mb-2">{product.price}</label>
            <button className="bg-orange-500 text-white p-2 rounded">
              ADD TO CART
            </button>
          </flexboxLayout>
        ))}
      </flexboxLayout>
    </flexboxLayout>
  );
}
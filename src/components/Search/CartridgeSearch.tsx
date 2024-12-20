import * as React from "react";
import { flexboxLayout, label, button } from "@nativescript/core";

export function CartridgeSearch() {
  return (
    <flexboxLayout className="p-8 bg-blue-500">
      <label className="text-2xl text-white text-center mb-4">
        FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
      </label>
      <flexboxLayout className="justify-center">
        <button className="bg-blue-400 text-white p-2 rounded mr-2">
          3-Step Easy Search®
        </button>
        <button className="bg-gray-200 text-black p-2 rounded">
          Search by Serial Number
        </button>
      </flexboxLayout>
      <flexboxLayout className="mt-4 justify-center">
        <button className="bg-gray-200 p-2 rounded mr-2 w-1/4">
          1. Printer Brand
        </button>
        <button className="bg-gray-200 p-2 rounded mr-2 w-1/4">
          2. Printer Series
        </button>
        <button className="bg-gray-200 p-2 rounded mr-2 w-1/4">
          3. Printer Model
        </button>
        <button className="bg-orange-500 text-white p-2 rounded w-1/4">
          FIND CARTRIDGES
        </button>
      </flexboxLayout>
    </flexboxLayout>
  );
}
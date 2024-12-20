import * as React from "react";
import { flexboxLayout, label, textField, button } from "@nativescript/core";

export function MainHeader() {
  return (
    <flexboxLayout className="p-4 justify-between items-center">
      <flexboxLayout className="items-center">
        <label className="text-2xl font-bold">👑 CARTRIDGE KINGS</label>
      </flexboxLayout>
      <flexboxLayout className="items-center">
        <textField 
          className="border rounded-lg p-2 mr-2" 
          hint="Search..."
        />
        <button className="bg-orange-500 text-white p-2 rounded">
          CART (1)
        </button>
      </flexboxLayout>
    </flexboxLayout>
  );
}
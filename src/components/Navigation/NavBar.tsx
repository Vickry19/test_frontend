import * as React from "react";
import { flexboxLayout, label } from "@nativescript/core";

export function NavBar() {
  return (
    <flexboxLayout className="bg-blue-600 p-4 justify-around">
      <label className="text-white">HOME</label>
      <label className="text-white">INK CARTRIDGES</label>
      <label className="text-white">TONER CARTRIDGES</label>
      <label className="text-white">CONTACT US</label>
      <label className="text-white">LOGIN / REGISTER</label>
    </flexboxLayout>
  );
}
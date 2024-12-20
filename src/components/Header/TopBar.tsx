import * as React from "react";
import { flexboxLayout, label } from "@nativescript/core";

export function TopBar() {
  return (
    <flexboxLayout className="bg-gray-100 justify-between items-center p-2">
      <flexboxLayout>
        <label className="text-sm mr-4">Franchise Opportunities</label>
        <label className="text-sm mr-4">Help</label>
        <label className="text-sm">Feedback</label>
      </flexboxLayout>
      <flexboxLayout>
        <label className="text-sm mr-4">help@retail.com</label>
        <label className="text-sm">0800 022 2022</label>
      </flexboxLayout>
    </flexboxLayout>
  );
}
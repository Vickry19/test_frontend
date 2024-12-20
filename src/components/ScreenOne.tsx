import * as React from "react";
import { ScrollView } from "@nativescript/core";
import { TopBar } from "./Header/TopBar";
import { MainHeader } from "./Header/MainHeader";
import { NavBar } from "./Navigation/NavBar";
import { CartridgeSearch } from "./Search/CartridgeSearch";
import { FeaturedProducts } from "./Products/FeaturedProducts";

export function ScreenOne() {
  return (
    <ScrollView>
      <TopBar />
      <MainHeader />
      <NavBar />
      <CartridgeSearch />
      <FeaturedProducts />
    </ScrollView>
  );
}
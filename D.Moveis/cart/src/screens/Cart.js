import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { numberFormat } from "../services/numberFormat"; // Formatação do preço

export const Cart = ({ items, getTotalPrice, getItemsCount, addItemToCart, removeItemFromCart }) => {

  const handleIncreaseQuantity = (id) => {
    addItemToCart(id);
  };

  const handleDecreaseQuantity = (id) => {
    removeItemFromCart(id);
  };
};



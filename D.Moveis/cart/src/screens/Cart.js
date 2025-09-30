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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meu Carrinho ({getItemsCount()} itens)</Text>

      {items.length > 0 ? (
        items.map((item) => (
          <View key={item.id} style={styles.productContainer}>
            <Image source={item.product.image} style={styles.productImage} resizeMode="cover" />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.productPrice}>
                {numberFormat(item.product.price)} x {item.qty} = {numberFormat(item.product.price * item.qty)}
              </Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.qty}</Text>
                <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyCart}>Seu carrinho está vazio!</Text>
      )}
      
      {items.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Preço Total: {numberFormat(getTotalPrice())}</Text>
        </View>
      )}
    </View>
  );
};



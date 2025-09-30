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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    marginLeft: 16,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: "#007acc",
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007acc",
  },
  emptyCart: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
});

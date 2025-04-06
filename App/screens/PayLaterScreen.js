import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

const products = [
  {
    name: "Nokia G20",
    price: "₦ 39,780",
    oldPrice: "₦ 48,000",
    image: require("../assets/android.png"),
    badge: require("../assets/discounts/pay40.png"),
  },
  {
    name: "iPhone XS Max 4GB...",
    price: "₦ 295,999",
    oldPrice: "₦ 376,000",
    image: require("../assets/iphone.png"),
    badge: require("../assets/discounts/ogabassey.png"),
  },
  {
    name: "iPhone 12 Pro",
    price: "₦ 490,500",
    oldPrice: "₦ 510,000",
    image: require("../assets/iphonex.png"),
    badge: require("../assets/discounts/imate.png"),
  },
  {
    name: "Anker Soundcore...",
    price: "₦ 39,780",
    oldPrice: "₦ 48,000",
    image: require("../assets/jambox.png"),
    badge: require("../assets/discounts/okayfones.png"),
  },
];

const merchants = [
  {
    name: "Justrite",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "Olle Restaurant",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "Slot",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "Poetrak",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "ogabassey",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "Casper Stores",
    image: require("../assets/featured/allfeatured.png"),
  },
  { name: "Dreamworks", image: require("../assets/featured/allfeatured.png") },
  {
    name: "Hubmart",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "Just Used",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
  {
    name: "Just Tastes",
    onlineSatus: require("../assets/featured/greendot.png"),
    image: require("../assets/featured/allfeatured.png"),
  },
];

export default function PayLaterScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f6fd" }}>
      <ScrollView style={{ backgroundColor: "#f4f6fd" }}>
        {/* Header */}
        <View
          style={{
            backgroundColor: "#d5e1fb",
            padding: 16,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{ width: "100%", paddingVertical: 30, flexDirection: "row" }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                width: "50%",
                color: "#1A1A1A",
              }}
            >
              Pay later everywhere{" "}
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#fff",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                  elevation: 3, // for Android
                }}
              >
                <Text style={{ fontSize: 16, color: "#274FED" }}>!</Text>
              </TouchableOpacity>
            </Text>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text style={{ color: "#20294A", paddingVertical: 5 }}>
                Shopping limit: ₦0
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#274FED",
                  //padding: 10,
                  paddingRight: 16,
                  paddingLeft: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 4,
                  alignSelf: "flex-end",
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 13 }}
                >
                  Activate Credit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F1F3FE",
              paddingHorizontal: 10,
              width: "80%",
              padding: 6,
              borderRadius: 20,
            }}
          >
            <Ionicons
              name="search-outline"
              size={20}
              color="#999"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Search for products or store"
              style={{
                flex: 1,
                paddingVertical: 8,
                fontSize: 12,
              }}
            />
          </View>
          <TouchableOpacity>
            <Ionicons
              name="scan-outline"
              size={24}
              color="#999"
              style={{
                backgroundColor: "#F1F3FE",
                padding: 10,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Products */}
        <View style={{ padding: 16, paddingBottom: 0 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            {products.map((product, index) => (
              <View
                key={index}
                style={{
                  width: 161,
                  height: 174,
                  marginRight: 16,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                {product.badge && (
                  <View
                    style={{
                      position: "absolute",
                      top: 5,
                      left: 5,
                      backgroundColor: "#fff",
                      borderRadius: 100,
                      zIndex: 10, // Ensure it stays above other elements
                    }}
                  >
                    <Image
                      source={product.badge}
                      style={{
                        height: 50,
                        width: 50,
                        alignSelf: "center",
                        resizeMode: "contain",
                        borderRadius: 120,
                      }}
                    />
                  </View>
                )}
                <Image
                  source={product.image}
                  style={{
                    height: 112,
                    width: 96,
                    alignSelf: "center",
                    resizeMode: "contain",
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{ fontWeight: "600", marginVertical: 5, fontSize: 14 }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{ color: "#1f3de9", fontWeight: "bold", fontSize: 14 }}
                >
                  {product.price}
                  {"    "}
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      fontSize: 12,
                      color: "#B3B3CC",
                    }}
                  >
                    {product.oldPrice}
                  </Text>
                </Text>
              </View>
            ))}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            {[...products].reverse().map((product, index) => (
              <View
                key={index}
                style={{
                  width: 161,
                  height: 174,
                  marginRight: 16,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                {product.badge && (
                  <View
                    style={{
                      position: "absolute",
                      top: 5,
                      left: 5,
                      backgroundColor: "#fff",
                      borderRadius: 100,
                      zIndex: 10, // Ensure it stays above other elements
                    }}
                  >
                    <Image
                      source={product.badge}
                      style={{
                        height: 50,
                        width: 50,
                        alignSelf: "center",
                        resizeMode: "contain",
                        borderRadius: 120,
                      }}
                    />
                  </View>
                )}
                <Image
                  source={product.image}
                  style={{
                    height: 112,
                    width: 96,
                    alignSelf: "center",
                    resizeMode: "contain",
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{ fontWeight: "600", marginVertical: 5, fontSize: 14 }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{ color: "#1f3de9", fontWeight: "bold", fontSize: 14 }}
                >
                  {product.price}
                  {"    "}
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      fontSize: 12,
                      color: "#B3B3CC",
                    }}
                  >
                    {product.oldPrice}
                  </Text>
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={{ padding: 16, backgroundColor: "#fff", paddingBottom: 30 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#33334D",
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              Featured Merchants
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#274FED", fontSize: 12 }}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
            {merchants.map((merchant, index) => (
              <View
                key={index}
                style={{
                  width: 70,
                  alignItems: "center",
                }}
              >
                <Image
                  source={merchant.image}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginBottom: 4,
                    resizeMode: "cover",
                  }}
                />
                <Image
                  source={merchant.onlineSatus}
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 30,
                    marginBottom: 4,
                    resizeMode: "cover",
                    position: "absolute",
                    right: 5,
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "#1A1A1A",
                    fontWeight: 500,
                  }}
                  numberOfLines={2}
                >
                  {merchant.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

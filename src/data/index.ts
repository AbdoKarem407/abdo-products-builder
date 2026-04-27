import {v4 as uuid} from "uuid";
import type { IProduct } from "../interfaces";
import { Description, Label } from "@headlessui/react";

export const data : IProduct[] = [
    {
        id: uuid(),
        title : "2026 Genesis Gv70: Nominee",
        description:
        "As Luxury brands go, South Korea's Genesis is still in its infacy, hsving sold its firs cars as an independent Hyunda",
        imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price:"$500000",
        colors: ["#FF0032" , "#2563b" , "#FF6E31"],
        category:{
            name:"Cars",
            imageURL:
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    },
    {
        id:uuid(),
        title: "Chevrolet Spark. 995cc Petrol",
        description:
        "As Luxury brands go, South Korea's Genesis is still in its infacy, hsving sold its firs cars as an independent Hyunda",
        imageURL:
    "   https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        price:"$12000",
        colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000" , "#FF0032"],
        category:{
            name:"Cars",
            imageURL:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        },
    },

  
 {
  id: uuid(),
  title: "Luxury Watch",
  description: "Elegant watch suitable for formal and casual outfits.",
  imageURL: "https://images.unsplash.com/photo-1730757679771-b53e798846cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "$200",
  colors: ["#000000", "#D4AF37", "#C0C0C0"],
  category: {
    name: "Accessories",
    imageURL: "https://images.unsplash.com/photo-1730757679771-b53e798846cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
},

{
  id: uuid(),
  title: "Sport Sneakers",
  description: "Comfortable sneakers perfect for running and daily wear.",
  imageURL: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1170&q=80",
  price: "$120",
  colors: ["#FFFFFF", "#000000", "#FF5733"],
  category: {
    name: "Shoes",
    imageURL: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1170&q=80",
  },
},

{
  id: uuid(),
  title: "Casual Backpack",
  description: "Durable backpack perfect for travel and daily use.",
  imageURL: "https://images.unsplash.com/photo-1678084559483-65e6ba4d9aba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "$90",
  colors: ["#1F2937", "#4B5563", "#6B7280"],
  category: {
    name: "Bags",
    imageURL: "https://images.unsplash.com/photo-1678084559483-65e6ba4d9aba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
},

{
  id: uuid(),
  title: "Apple iPad 10.9 ( Chip) – Sleek & Powerful Tablet",
  description: "Experience smooth performance and stunning visuals with the Apple ",
  imageURL: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
  price: "$499",
  colors: ["#1F2937", "#4B5563", "#6B7280"],
  category: {
    name: "Bags",
    imageURL: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
  },
},    
{
  id: uuid(),
  title: "Sleek Smartphone Modern Design & High Performance",
  description: "A stylish and powerful smartphone featuring a sleek design, vibrant display, and smooth performance.",
  imageURL: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "$699",
  colors: ["#1F2937", "#4B5563", "#6B7280"],
  category: {
    name: "Bags",
    imageURL: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
},   

{
  id: uuid(),
  title: "Apple iPad 10.9 ( Chip) – Sleek & Powerful Tablet",
  description: "Experience smooth performance and stunning visuals with the Apple ",
  imageURL: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
  price: "$499",
  colors: ["#1F2937", "#4B5563", "#6B7280"],
  category: {
    name: "Bags",
    imageURL: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
  },
},   


{
  id: uuid(),
  title: "Apple iPad 10.9 ( Chip) – Sleek & Powerful Tablet",
  description: "Experience smooth performance and stunning visuals with the Apple ",
  imageURL: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
  price: "$499",
  colors: ["#1F2937", "#4B5563", "#6B7280"],
  category: {
    name: "Bags",
    imageURL: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
  },
},   

]

export const formInputsList: IFormInput[] = [
 { id: "title", 
  name:"title",
  label:"Product Title",
  type:"text",
 },
 {
  id:"description",
  name:"description",
  label:"Product Description",
  type:"text",
 },
 {
  id: "image",
  name:"imageURL",
  label:"Product Image URL",
  type:"text",
 },
 {
  id:"price",
  name:"price",
  label:"Product Price",
  type:"text",

 }
]
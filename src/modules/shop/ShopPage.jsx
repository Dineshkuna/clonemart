import React, { useState, useEffect } from 'react';
import './ShopPage.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import productImg01 from "../../Assets/Images/double-sofa-01.png";
import productImg02 from "../../Assets/Images/double-sofa-02.png";
import productImg03 from "../../Assets/Images/double-sofa-03.png";

import productImg04 from "../../Assets/Images/single-sofa-01.jpg";
import productImg05 from "../../Assets/Images/single-sofa-02.jpg";
import productImg06 from "../../Assets/Images/single-sofa-03.jpg";
import productImg007 from "../../Assets/Images/single-sofa-04.png";

import productImg07 from "../../Assets/Images/arm-chair-01.jpg";
import productImg08 from "../../Assets/Images/arm-chair-02.jpg";
import productImg09 from "../../Assets/Images/arm-chair-03.jpg";
import productImg10 from "../../Assets/Images/arm-chair-01.jpg";

import phone01 from "../../Assets/Images/phone-01.jpg";
import phone02 from "../../Assets/Images/phone-02.jpg";
import phone03 from "../../Assets/Images/phone-03.png";
import phone04 from "../../Assets/Images/phone-04.jpg";
import phone05 from "../../Assets/Images/phone-05.jpg";
import phone06 from "../../Assets/Images/phone-06.jpg";
// import phone08 from "../../Assets/Images/phone-08.png";

import watch01 from "../../Assets/Images/watch-01.jpg";
import watch02 from "../../Assets/Images/watch-02.jpg";
import watch03 from "../../Assets/Images/watch-03.jpg";
import watch04 from "../../Assets/Images/watch-04.jpg";

import wireless01 from "../../Assets/Images/wireless-01.png";
import wireless02 from "../../Assets/Images/wireless-02.png";
import wireless03 from "../../Assets/Images/wireless-03.png";
import wireless04 from "../../Assets/Images/wireless-04.png";

// import sofaSlide from "../Images/hero-img.png";
// import watchSlide from "../Images/watch-07.png";

const products = [
    {
      id: "01",
      productName: "Stone and Beam Westview ",
      imgUrl: productImg01,
      category: "sofa",
      price: 193,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.7,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.5,
    },
  
    {
      id: "02",
      productName: "Rivet Bigelow Modern ",
      imgUrl: productImg02,
      category: "sofa",
      price: 253,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "03",
      productName: "Amazon Brand Modern Sofa",
      imgUrl: productImg03,
      category: "sofa",
      price: 173,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "26",
      productName: "Rivet Bigelow Modern ",
      imgUrl: productImg02,
      category: "sofa",
      price: 253,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "04",
      productName: "Fllufy Sheep Sofa",
      imgUrl: productImg04,
      category: "sofa",
      price: 163,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "05",
      productName: "Faux Velvet Sofa",
      imgUrl: productImg05,
      category: "sofa",
      price: 163,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "06",
      productName: "Fllufy Sheep Sofa",
      imgUrl: productImg06,
      category: "sofa",
      price: 163,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "07",
      productName: "Sakarias Armchair",
      imgUrl: productImg07,
      category: "chair",
      price: 99,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "27",
      productName: "Modern Arm Sofa",
      imgUrl: productImg007,
      category: "sofa",
      price: 173,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "08",
      productName: "Baltsar Chair",
      imgUrl: productImg08,
      category: "chair",
      price: 89,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "09",
      productName: "Helmar Chair",
      imgUrl: productImg09,
      category: "chair",
      price: 112,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
  
    {
      id: "10",
      productName: "Apple iPhone 12 Pro",
      imgUrl: phone01,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "25",
      productName: "Sakarias Armchair",
      imgUrl: productImg10,
      category: "chair",
      price: 99,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "11",
      productName: "Apple iPhone 12 Max",
      imgUrl: phone02,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "12",
      productName: "Realme 8",
      imgUrl: phone03,
      category: "mobile",
      price: 599,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "13",
      productName: "One Plus Nord",
      imgUrl: phone04,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "14",
      productName: "Apple iPhone 13 Pro",
      imgUrl: phone05,
      category: "mobile",
      price: 899,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "15",
      productName: "Samsung Galaxy S22",
      imgUrl: phone06,
      category: "mobile",
      price: 699,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "16",
      productName: "Rolex Watch",
      imgUrl: watch01,
      category: "watch",
      price: 299,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "17",
      productName: "Timex Easy Reader Watch",
      imgUrl: watch02,
      category: "watch",
      price: 299,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "18",
      productName: "Rolex Watch",
      imgUrl: watch03,
      category: "watch",
      price: 299,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "19",
      productName: "Apple Watch",
      imgUrl: watch04,
      category: "watch",
      price: 399,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "20",
      productName: "Beat Studio Wireless",
      imgUrl: wireless01,
      category: "wireless",
      price: 199,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "21",
      productName: "Beat EP Headphones",
      imgUrl: wireless03,
      category: "wireless",
      price: 199,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "22",
      productName: "Black Headphones",
      imgUrl: wireless02,
      category: "wireless",
      price: 169,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "23",
      productName: "Bluetooth Headphones",
      imgUrl: wireless04,
      category: "wireless",
      price: 139,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
  ];

const categories = ["all", ...new Set(products.map(item => item.category))];

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  

  useEffect(() => {
    let result = products;

    if (isInitialLoad) {
     
      result = products.filter(product => 
        product.category === 'sofa' || product.category === 'chair'
      );
      setIsInitialLoad(false);
    } else if (selectedCategory !== 'all' && selectedCategory !== 'sofa-chair') {
      result = result.filter(product => product.category === selectedCategory);
    } else if (selectedCategory === 'sofa-chair') {
      result = result.filter(product => 
        product.category === 'sofa' || product.category === 'chair'
      );
    }

    if (searchQuery) {
      result = result.filter(product => 
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, isInitialLoad]);


  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    toast.success('Product added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };



  return (
    <div className="shop-page">
      <h1>product</h1>
      <div className="shop-controls">
        <div className="filter-dropdown">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ToastContainer />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.productName} />
            <h3>{product.productName}</h3>
            <div className="rating">
              {[...Array(Math.round(product.avgRating))].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              
            </div>
            <p>${product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)} >+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
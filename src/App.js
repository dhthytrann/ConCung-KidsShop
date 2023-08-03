import { AuthContext } from "./context/authContext";
import { DataContext } from "./context/dataContext";
import { BrowserRouter, useParams } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProduct,
  getSuggestProduct,
} from "./redux/slice/Product/productSlice";

function App() {
  const [isAuth, setAuth] = useState(false);

  const productData = [
    //BEST SELLER
    {
      id: 48,
      sku: 987612347,
      category: ["Apparels For Baby"],
      name: "Baby Clothes",
      rangePrice: "$140.00 – $340.00",
      price: 55,

      image: [
        "images/KidsProduct/Apparels For Baby/1/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/1/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/1/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/1/img-01.jpg",
      ],

      featured: "TOP",
      promotion: "60% OFF",
      review: 5,
      color: ["#1e73be", "#56962e"],
      size: ["L", "S", "M"],
      quantity: 10,
    },

    //SHOSES/Sneaker (id 1-9)
    {
      id: 1,
      sku: 69633543,
      category: ["Apparels For Baby", "New Arrivals", "Children's Clothing"],
      name: "Baby Pinky Top",
      rangePrice: "$29.00 – $49.00",
      price: 44,

      image: [
        "images/KidsProduct/Apparels For Baby/2/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/2/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/2/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/2/img-01.jpg",
      ],

      featured: "TOP",
      promotion: "10% OFF",
      review: 4,
      color: ["#222222", "#d99e76"],
      size: ["XL", "M"],
      quantity: 5,
    },
    {
      id: 2,
      sku: 987612340,
      category: ["Apparels For Baby"],
      name: "Healthy Milk",
      rangePrice: "$180.00 – $210.00",
      price: 22,

      image: [
        "images/KidsProduct/Apparels For Baby/3/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/3/img-02.jpg",
        "images/KidsProduct/Apparels For Baby/3/img-03.jpg",
        "images/KidsProduct/Apparels For Baby/3/img-04.jpg",
      ],

      featured: "",
      promotion: "2% OFF",
      review: 5,
      color: ["#222222"],
      size: ["L", "M"],
      quantity: 2,
    },
    {
      id: 3,
      sku: 1234567893,
      category: ["Apparels For Baby", "Best Sellers", "Our Featured"],
      name: "Hot Baby Footwear",
      rangePrice: "$180.00 – $210.00",
      price: 21,

      image: [
        "images/KidsProduct/Apparels For Baby/4/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/4/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/4/img-01.jpg",
        "images/KidsProduct/Apparels For Baby/4/img-01.jpg",
      ],

      featured: "SALE",
      promotion: "30% OFF",
      review: 5,
      color: ["#222222"],
      size: ["L", "M"],
      quantity: 3,
    },
    {
      id: 4,
      sku: 1234567893,
      category: ["Baby Carriage", "Latest Products"],
      name: "Baby Carriage",
      rangePrice: "$199.00",
      price: 111,

      image: [
        "images/KidsProduct/Baby Carriage/1/img-01.jpg",
        "images/KidsProduct/Baby Carriage/1/img-01.jpg",
        "images/KidsProduct/Baby Carriage/1/img-01.jpg",
        "images/KidsProduct/Baby Carriage/1/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 4,
    },
    {
      id: 5,
      sku: 334443,
      category: ["Baby Carriage", "Our Featured", "New Arrivals"],
      name: "Babycare Craddle",
      rangePrice: "$210.00",
      price: 199,

      image: [
        "images/KidsProduct/Baby Carriage/2/img-01.jpg",
        "images/KidsProduct/Baby Carriage/2/img-02.jpg",
        "images/KidsProduct/Baby Carriage/2/img-03.jpg",
        "images/KidsProduct/Baby Carriage/2/img-01.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 5,
      color: ["#222222"],
      size: ["L", "S"],
      quantity: 5,
    },
    {
      id: 6,
      sku: 33523422,
      category: [
        "Baby Toys",
        "Best Sellers",
        "New Arrivals",
        "Toys Collection",
      ],
      name: "Blue Soundable Fish",
      rangePrice: "$59.00 – $60.00",
      price: 11,

      image: [
        "images/KidsProduct/Baby Toys/1/img-01.jpg",
        "images/KidsProduct/Baby Toys/1/img-02.jpg",
        "images/KidsProduct/Baby Toys/1/img-03.jpg",
        "images/KidsProduct/Baby Toys/1/img-04.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 5,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 6,
    },
    {
      id: 7,
      sku: 33523422,
      category: ["Baby Toys", "New Arrivals", "Toys Collection"],
      name: "Colorful Baby Base",
      rangePrice: "$49.00",
      price: 35,

      image: [
        "images/KidsProduct/Baby Toys/2/img-01.jpg",
        "images/KidsProduct/Baby Toys/2/img-01.jpg",
        "images/KidsProduct/Baby Toys/2/img-01.jpg",
        "images/KidsProduct/Baby Toys/2/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 5,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 7,
    },
    {
      id: 8,
      sku: 123456793,
      category: ["Baby Toys"],
      name: "Colorful Baby Stationary",
      rangePrice: "$210.00",
      price: 18,

      image: [
        "images/KidsProduct/Baby Toys/3/img-01.jpg",
        "images/KidsProduct/Baby Toys/3/img-02.jpg",
        "images/KidsProduct/Baby Toys/3/img-03.jpg",
        "images/KidsProduct/Baby Toys/3/img-04.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 0,
      color: ["#2b2b2b", "#d99e76"],
      size: ["XL", "M"],
      quantity: 8,
    },
    {
      id: 9,
      sku: 12345679,
      category: ["Baby Toys"],
      name: "Ping Pang Tertle",
      rangePrice: "$110.00",
      price: 5,

      image: [
        "images/KidsProduct/Baby Toys/4/img-01.jpg",
        "images/KidsProduct/Baby Toys/4/img-02.jpg",
        "images/KidsProduct/Baby Toys/4/img-03.jpg",
        "images/KidsProduct/Baby Toys/4/img-04.jpg",
        ,
      ],

      featured: "TOP",
      promotion: "",
      review: 0,
      color: ["#f6a800"],
      size: ["M"],
      quantity: 2,
    },

    {
      id: 10,
      sku: 987612340,
      category: ["Baby Toys"],
      name: "Tertle Shape Shoes",
      rangePrice: "$170.00 – $190.00",
      price: 22,

      image: [
        "images/KidsProduct/Baby Toys/5/img-01.jpg",
        "images/KidsProduct/Baby Toys/5/img-01.jpg",
        "images/KidsProduct/Baby Toys/5/img-01.jpg",
        "images/KidsProduct/Baby Toys/5/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#bc6d33"],
      size: ["L", "M"],
      quantity: 3,
    },
    {
      id: 11,
      sku: 12345679,
      category: ["Baby Toys", "Toys Collection"],
      name: "Yale Cute Whale",
      rangePrice: "$140.00 – $170.00",
      price: 25,

      image: [
        "images/KidsProduct/Baby Toys/6/img-01.jpg",
        "images/KidsProduct/Baby Toys/6/img-01.jpg",
        "images/KidsProduct/Baby Toys/6/img-01.jpg",
        "images/KidsProduct/Baby Toys/6/img-01.jpg",
      ],

      featured: "",
      promotion: "3% OFF",
      review: 3,
      color: ["#999"],
      size: ["L"],
      quantity: 2,
    },
    {
      id: 12,
      sku: 9871238,
      category: ["Candy Cake"],
      name: "Chocholate Cake",
      rangePrice: "$250.00 – $300.00",
      price: 130,

      image: [
        "images/KidsProduct/Candy Cake/1/img-01.jpg",
        "images/KidsProduct/Candy Cake/1/img-02.jpg",
        "images/KidsProduct/Candy Cake/1/img-03.jpg",
        "images/KidsProduct/Candy Cake/1/img-04.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 4,
      color: ["#965000"],
      size: ["M", "L"],
      quantity: 5,
    },

    {
      id: 13,
      sku: 9231631,
      category: ["Candy Cake", "Eat & Foods For Baby"],
      name: "Creemy Cake",
      rangePrice: "$350.00",
      price: 99,

      image: [
        "images/KidsProduct/Candy Cake/2/img-01.jpg",
        "images/KidsProduct/Candy Cake/2/img-02.jpg",
        "images/KidsProduct/Candy Cake/2/img-03.jpg",
        "images/KidsProduct/Candy Cake/2/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#f8a5c2"],
      size: ["M", "L"],
      quantity: 5,
    },
    {
      id: 14,
      sku: 1235631,
      category: ["Candy Cake"],
      name: "Creemy Cake",
      rangePrice: "$280.00",
      price: 99,

      image: [
        "images/KidsProduct/Candy Cake/3/img-01.jpg",
        "images/KidsProduct/Candy Cake/3/img-02.jpg",
        "images/KidsProduct/Candy Cake/3/img-03.jpg",
        "images/KidsProduct/Candy Cake/3/img-04.jpg",
      ],

      featured: "",
      promotion: "3% OFF",
      review: 4,
      color: ["#fdcb6e"],
      size: ["M", "L"],
      quantity: 5,
    },
    {
      id: 15,
      sku: 8369183,
      category: ["Candy Cake", "Eat & Foods For Baby"],
      name: "Sweety Cake",
      rangePrice: "$250.00 – $300.00",
      price: 170,

      image: [
        "images/KidsProduct/Candy Cake/4/img-01.jpg",
        "images/KidsProduct/Candy Cake/4/img-02.jpg",
        "images/KidsProduct/Candy Cake/4/img-01.jpg",
        "images/KidsProduct/Candy Cake/4/img-02.jpg",
      ],

      featured: "",
      promotion: "",
      review: 5,
      color: ["#ffbe76"],
      size: ["M", "L"],
      quantity: 6,
    },
    {
      id: 16,
      sku: 2309182,
      category: ["Gifts & Others"],
      name: "Baby Clean Gadget",
      rangePrice: "$280.00",
      price: 66,

      image: [
        "images/KidsProduct/Gifts & Others/1/img-01.jpg",
        "images/KidsProduct/Gifts & Others/1/img-01.jpg",
        "images/KidsProduct/Gifts & Others/1/img-01.jpg",
        "images/KidsProduct/Gifts & Others/1/img-01.jpg",
      ],

      featured: "TOP",
      promotion: "10% OFF",
      review: 5,
      color: ["#535c68"],
      size: ["M", "L"],
      quantity: 6,
    },
    {
      id: 17,
      sku: 5127291,
      category: ["Gifts & Others", "Best Sellers"],
      name: "Baby Ducky Toy",
      rangePrice: "$190.00",
      price: 75,

      image: [
        "images/KidsProduct/Gifts & Others/2/img-01.jpg",
        "images/KidsProduct/Gifts & Others/2/img-02.jpg",
        "images/KidsProduct/Gifts & Others/2/img-03.jpg",
        "images/KidsProduct/Gifts & Others/2/img-04.jpg",
      ],

      featured: "",
      promotion: "2% OFF",
      review: 3,
      color: ["#f6b93b"],
      size: ["L"],
      quantity: 4,
    },
    {
      id: 18,
      sku: 5127291,
      category: ["Gifts & Others", "Children's Clothing"],
      name: "Pretty Baby Shoes",
      rangePrice: "$170.00 – $250.00",
      price: 13,

      image: [
        "images/KidsProduct/Gifts & Others/3/img-01.jpg",
        "images/KidsProduct/Gifts & Others/3/img-01.jpg",
        "images/KidsProduct/Gifts & Others/3/img-01.jpg",
        "images/KidsProduct/Gifts & Others/3/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#ffcccc"],
      size: ["L"],
      quantity: 4,
    },

    {
      id: 19,
      sku: 35236643,
      category: ["Gifts & Others", "Our Featured"],
      name: "Tortose Cute Shoes",
      rangePrice: "$99.00 – $129.00",
      price: 10,

      image: [
        "images/KidsProduct/Gifts & Others/4/img-01.jpg",
        "images/KidsProduct/Gifts & Others/4/img-02.jpg",
        "images/KidsProduct/Gifts & Others/4/img-03.jpg",
        "images/KidsProduct/Gifts & Others/4/img-04.jpg",
      ],

      featured: "",
      promotion: "5% OFF",
      review: 0,
      color: ["#2b2b2b", "#d99e76"],
      size: ["XL", "M"],
      quantity: 9,
    },
    {
      id: 20,
      sku: 4654634,
      category: ["Milk For Baby", "Latest Products", "Eat & Foods For Baby"],
      name: "Dairy Milk",
      rangePrice: "$199.00",
      price: 8,

      image: [
        "images/KidsProduct/Milk For Baby/1/img-01.jpg",
        "images/KidsProduct/Milk For Baby/1/img-02.jpg",
        "images/KidsProduct/Milk For Baby/1/img-03.jpg",
        "images/KidsProduct/Milk For Baby/1/img-04.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 3,
      color: ["#a4b0be"],
      size: ["M"],
      quantity: 6,
    },
    {
      id: 21,
      sku: 123456795,
      category: ["Milk For Baby", "Our Featured"],
      name: "Milk Bottle Helper",
      rangePrice: "$139.00 – $169.00",
      price: 23,

      image: [
        "images/KidsProduct/Milk For Baby/2/img-01.jpg",
        "images/KidsProduct/Milk For Baby/2/img-01.jpg",
        "images/KidsProduct/Milk For Baby/2/img-01.jpg",
        "images/KidsProduct/Milk For Baby/2/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#2b2b2b", "#d99e76"],
      size: ["XL", "M"],
      quantity: 4,
    },
    {
      id: 22,
      sku: 44545322,
      category: ["Milk For Baby"],
      name: "Dairy Milky Drink",
      rangePrice: "$87.00",
      price: 23,

      image: [
        "images/KidsProduct/Milk For Baby/3/img-01.jpg",
        "images/KidsProduct/Milk For Baby/3/img-02.jpg",
        "images/KidsProduct/Milk For Baby/3/img-03.jpg",
        "images/KidsProduct/Milk For Baby/3/img-04.jpg",
      ],

      featured: "TOP",
      promotion: "20% OFF",
      review: 5,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 9,
    },
    {
      id: 23,
      sku: 87864456,
      category: ["Pictorial Book"],
      name: "New Design Toy",
      rangePrice: "$139.00",
      price: 13,

      image: [
        "images/KidsProduct/Pictorial Book/1/img-01.jpg",
        "images/KidsProduct/Pictorial Book/1/img-01.jpg",
        "images/KidsProduct/Pictorial Book/1/img-01.jpg",
        "images/KidsProduct/Pictorial Book/1/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#2b2b2b", "#d99e76", "#9a999d"],
      size: ["M", "XL", "L"],
      quantity: 5,
    },
    {
      id: 24,
      sku: 12345684,
      category: ["Secures & Health", "Our Featured"],
      name: "Anti-Virus Sanitizer",
      rangePrice: "$98.00 – $129.00",
      price: 98,

      image: [
        "images/KidsProduct/Secures & Health/1/img-01.jpg",
        "images/KidsProduct/Secures & Health/1/img-01.jpg",
        "images/KidsProduct/Secures & Health/1/img-01.jpg",
        "images/KidsProduct/Secures & Health/1/img-01.jpg",
      ],

      featured: "SALE",
      promotion: "50% OFF",
      review: 0,
      color: ["#a4b0be"],
      size: ["M", "L"],
      quantity: 5,
    },

    {
      id: 25,
      sku: 12345675,
      category: ["Secures & Health", "Best Sellers"],
      name: "Baby Bath Base",
      rangePrice: "$123.00",
      price: 12,

      image: [
        "images/KidsProduct/Secures & Health/2/img-01.jpg",
        "images/KidsProduct/Secures & Health/2/img-02.jpg",
        "images/KidsProduct/Secures & Health/2/img-03.jpg",
        "images/KidsProduct/Secures & Health/2/img-04.jpg",
      ],

      featured: "",
      promotion: "5% OFF",
      review: 4,
      color: ["#40407a"],
      size: ["XL", "M"],
      quantity: 5,
    },
    {
      id: 26,
      sku: 12345682,
      category: ["Secures & Health", "Children's Clothing"],
      name: "Baby Comforter",
      rangePrice: "$199.00",
      price: 11,

      image: [
        "images/KidsProduct/Secures & Health/3/img-01.jpg",
        "images/KidsProduct/Secures & Health/3/img-01.jpg",
        "images/KidsProduct/Secures & Health/3/img-01.jpg",
        "images/KidsProduct/Secures & Health/3/img-01.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#fad390", "#d35400"],
      size: ["XL", "M"],
      quantity: 5,
    },
  ];

  const [cartData, setCartData] = useState([
    // {
    //   idCart: 0,
    //   idProduct: 1,
    //   size: "XL",
    //   color: "Brown",
    //   amount: 3,
    // },
  ]);

  const [filterProductData, setFilterProductData] = useState(productData);

  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const [openCart, setOpenCart] = useState(false);

  const [openViewProduct, setOpenViewProduct] = useState(false);
  const [idViewProduct, setIdViewProduct] = useState();

  const [openVideoPopup, setOpenVideoPopup] = useState(false);

  const [openFilterPopup, setOpenFilterPopup] = useState(false);

  const [openAdvertisementPopup, setOpenAdvertisementPopup] = useState(false);
  const [openMenuPopup, setOpenMenuPopup] = useState(false);

  const dispath = useDispatch();

  // useEffect(() => {
  //   dispath(getAllProduct());
  //   dispath(getSuggestProduct());
  // }, []);

  const inTotalCart = () => {
    const total = cartData.reduce((accumulator, object) => {
      const item = productData.find((val) => val.id === object.idProduct);
      const price = item.price;

      return accumulator + object.amount * price;
    }, 0);
    setCartTotalAmount(total);
  };

  useEffect(() => {
    inTotalCart();
  }, [cartData]);

  const param = useParams();

  useEffect(() => {
    // 👇️ scroll to top on page load
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={[isAuth, setAuth]}>
        <DataContext.Provider
          value={{
            productData,

            cartData,
            setCartData,

            openCart,
            setOpenCart,

            cartTotalAmount,
            setCartTotalAmount,

            openViewProduct,
            setOpenViewProduct,

            idViewProduct,
            setIdViewProduct,

            openVideoPopup,
            setOpenVideoPopup,

            openFilterPopup,
            setOpenFilterPopup,

            filterProductData,
            setFilterProductData,

            openAdvertisementPopup,
            setOpenAdvertisementPopup,

            openMenuPopup,
            setOpenMenuPopup,
          }}
        >
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DataContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

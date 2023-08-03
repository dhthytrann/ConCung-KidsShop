import { useContext, useEffect, useState } from "react";
import "../SearchBar/SearchBar.scss";
import ItemSearchResult from "./ItemSearchResult/ItemSearchResult";
import { DataContext } from "../../../../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";

const SearchBar = () => {
  // const listProduct = JSON.parse(localStorage.getItem("productData"));
  const { productData } = useContext(DataContext);
  const [searchResult, setSearchResult] = useState(productData);
  const [key, setKey] = useState(false);

  const [openBoxResult, setOpenBoxResult] = useState(false);

  // console.log(productData);

  //const [keyWord, setKeyWord] = useState();
  const handleSearch = (e) => {
    const key = e.target.value;
    if (key != null) {
      setKey(true);
    } else {
      setKey(false);
    }
    // setKeyWord(key);
    // console.log(key);

    const handleFilterProduct = productData.filter((val) =>
      val.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
    );
    //const searchResult = [...handleFilterProduct];
    setSearchResult(handleFilterProduct);
  };

  return (
    <div className="searchbar">
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenBoxResult(false);
        }}
      >
        <div className="search-box">
          <form
            action=""
            className="searchbox"
            onClick={() => {
              setOpenBoxResult(true);
            }}
          >
            <input
              type="text"
              className="search-input"
              placeholder="Type here to search..."
              onChange={(e) => handleSearch(e)}
            />
            <i class="fa-regular fa-magnifying-glass"></i>
          </form>
          {openBoxResult && (
            <div className="border-box-result">
              <div className="box-result mt-1">
                {searchResult &&
                  searchResult.map((product) => (
                    <ItemSearchResult
                      key={product.id}
                      idProduct={product.id}
                      imgProduct={product?.image[0]}
                      productName={product?.name}
                      price={product?.price}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default SearchBar;

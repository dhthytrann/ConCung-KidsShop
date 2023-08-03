import { useContext, useState } from "react";
import "../SearchBarMobile/SearchBarMobile.scss";
import { DataContext } from "../../../../context/dataContext";
import ItemSearchResult from "../MenuNavigate/SearchBar/ItemSearchResult/ItemSearchResult";

const SearchBarMobile = () => {
  const { productData } = useContext(DataContext);
  const [searchResult, setSearchResult] = useState(productData);
  const [key, setKey] = useState(false);

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

  // setSearchResult(handleFilterProduct);

  return (
    <div className="searchbar-mobile">
      <div className="btn-search">
        <i class="fa-regular fa-magnifying-glass"></i>
        <div className="search-box">
          <form action="" className="searchbox">
            <input
              type="text"
              className="search-input"
              placeholder="Type here to search..."
              onChange={(e) => handleSearch(e)}
            />
            <i class="fa-regular fa-magnifying-glass"></i>
          </form>
          {key && (
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
      </div>
    </div>
  );
};

export default SearchBarMobile;

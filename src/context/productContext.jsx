import axios from "axios";
import { createContext, useEffect, useState } from "react";

/*
  * Context API
  * uygulamda birden çok bileşen ihtiyacı olan verileri Bileşenlerden 
  * bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar.
  
  * Context yapısı içerisinde verilerin state'ni ve verileri değiştirmeye
  * yarayan fonksiyonlar tutulabilir.
   
  * Context, tuttuğumuz değişkenleri bileşenler doğrudan aktarım
  * yapabilen merkezi state yönetim aracıdır
*/

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımlama
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("all");

  console.log(category);

  useEffect(() => {
    setProducts(null)
    // hangi url'e istek atılacağını belirler
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

          // api isteği at
    axios.get(url).then((res) => setProducts(res.data));
  }, [category]);

  //context yapısında tuttuğumuz verileri bileşenler sağlar
  return (
    <ProductContext.Provider value={{ products, setCategory, category }}>
      {children}
    </ProductContext.Provider>
  );
}

import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";



//1) Context yapısı tanımlama

export const BasketContext = createContext();

//2) context'de tutulan verileri uygulamaya aktaracak bir sağlayıcı bileşeni tanımlama

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket",[]);

  //sepete ürün ekler

  const addToBasket = (newProduct) => {
    //1) bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);
    if (found) {
      //2) ürün sepette varsa -> miktarını bir arttır
      //sepette varsa ürünü 1 arttır
      const updated = { ...found, amount: found.amount + 1 };
      // sepet dizisindeki eski ürünün yerine güncel halini koy
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      //state güncelle
      setBasket(newBasket);
      toast.info(`Ürün miktarı arttırıldı(${updated.amount})`)
    } else {
      //3) ürün sepette yoksa -> ürünü sepete ekle ve miktarı 1'e eşitle
      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.success("Ürün sepete eklendi")
      
    
    }
    console.log(basket);
  };

  //ürünü sepetten kaldır

  const removeFromBasket = (delete_id) => {
    //sepetteki ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      //miktarı 1 den fazlaysa -> miktarını 1 e eşitle
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
      toast.info(`Ürün miktarı azaltıldı(${updated.amount})`)

    } else {
      //miktarı 1'e eşitse -> ürünü diziden kaldır
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
      toast.error("Ürün sepetten kaldırıldı")

    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

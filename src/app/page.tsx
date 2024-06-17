'use client';

import Image from "next/image";
import {useEffect} from "react";

export default function Home() {
  export default function Home() {
    useEffect(() => {
      if (window.Telegram) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        console.log(tg.initDataUnsafe);
      }
    }, []);

    const onClose = () => {
      if (window.Telegram) {
        const tg = window.Telegram.WebApp;
        tg.close();
      }
    }

  return (
    <div>
      <h1>Прим Пицца</h1>
      <Image
        src="/logoPrimPizza.png"
        alt="Prim Pizza Logo"
        width={100}
        height={100}
      />
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

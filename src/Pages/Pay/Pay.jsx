import styles from "./Pay.module.scss";
const Pay = () => {
  return (
    <div className={styles.container}>
      <h1>Інформація про оплату:</h1>
      <div className={styles.line}></div>
      <div className={styles.p}>
        Ми пропонуємо 2 способи оплатити Ваше замовлення: <br/>1) Післяплата (оплата
        при отриманні посилки) - кур'єрська доставка "MEEST" для замовлень менше
        вартості 150 євро 
        <br/>У цьому випадку ми не беремо жодних передплат; 
        <br/>Оплата
        завжди при отриманні товару (посилки); 
        <br/>Ви оплачуєте лише вартість Вашого
        замовлення + вартість доставки. 
        <br/>2) Оплата онлайн 
        <ul>
       <li>Оплата здійснюється на
        сайті через сертифіковану платіжну систему Przelewy24, приймаються карти
        Visa або Mastercard, або за допомогою електронних гаманців Google Pay і
        Apple Pay. Будь ласка, переконайтеся, що ваша карта має активний дозвіл
        на оплату в інтернеті; 
        </li>
       <li>Розмір комісії та курс конвертації - відповідно
        до тарифів Вашого банку; 
        </li>
       <li>Для клієнтів ПриватБанку: переконайтеся, що Ви
        дали згоду на здійснення транзакцій за межами України. Докладніше тут;
        </li>
       <li>Банківськи картки, видані російськими банками Sberbank, VTB,
        Gazprombank, Alfa Bank, Promsvyzbank, Otkritie bank, Russian
        Agricultural Bank, Novikombank, Bank Rossiya, Sovcombank, VEB Bank for
        development, Bank of Russia, Russian Direct Investment fund не
        обслуговуються європейським сертифікованим оператором
        інтернет-транзакцій Przelewy24. 
        </li>
       <li>При умові онлайн оплати Ваше замовлення
        буде оброблено миттєво, що допоможе нам якнайшвидше його відправити.
        </li>
        </ul>
      </div>
      <img src="./img/pays.png" alt="pays" />
    </div>
  );
};
export default Pay;
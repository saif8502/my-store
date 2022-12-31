import React from "react";
import ModalDelivery from "./ModalDelivery";
import ModalPayment from "./ModalPayment";
import ModalReturns from "./ModalReturns";
import { useStateContext } from "../context/StateContext";
 const ModalBanner = () => {
  const { deliveryIsOpen, toggleDeliveryOpen, toggleDeliveryClose} = useStateContext();
  const { returnsIsOpen, toggleReturnsOpen, toggleReturnsClose } = useStateContext();
  const { paymentIsOpen, togglePaymentOpen, togglePaymentClose } = useStateContext();
  return (
    <div className="cards-banner">
 
      {/*Delivery Modal starts*/}
<ModalDelivery deliveryOpen={deliveryIsOpen} deliveryClose={toggleDeliveryClose}>
        <div className="modal-text">
          <h1 className="p-10">Flexible delivery and pickup options.</h1>
          <p className="p-10">
            Get your new myStore products quickly and easily with a handful of
            delivery and pickup options to choose from.
          </p>

          <h2 className="p-10">Two-hour delivery from an myStore.</h2>
          <p className="p-10">
            Enjoy lightning-fast courier delivery for an additional fee at
            checkout, on eligible in-stock items in most metro areas. Delivery
            time windows can be scheduled at checkout.
          </p>

          <h2 className="p-10">Convenient local pickup.</h2>
          <p className="p-10">
            Place your order online and pick it up at a local myStore.
            Curbside pickup is also available at select locations — simply park
            your car and we’ll bring your order out to you.
          </p>

          <h2 className="p-10">Free next-day delivery.</h2>
          <p className="p-10">
            Most of your favorite myStore products are available for free next-day
            delivery.
          </p>
        </div>
      </ModalDelivery>
      <div className="card-banner" onClick={toggleDeliveryOpen}>
        <svg
          className="card-banner-icons"
          height="56"
          viewBox="0 0 49 56"
          width="49"
          role="img"
        >
          <path d="m0 0h49v56h-49z" fill="none"></path>
          <path
            d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z"
            fill="#6CCA4E"
          ></path>
        </svg>

        <h3 className="card-banner-text">
          Enjoy{" "}
          <span className="green-highlight card-banner-texts">
            two-hour delivery
          </span>{" "}
          from myStore,
          <span className="green-highlight card-banner-texts">
            {" "}
            free delivery
          </span>
          , or{" "}
          <span className="green-highlight card-banner-texts">
            easy pickup.
          </span>
        </h3>
        
      </div>

{/*Delivery Modal ends*/}
     
{/*Returns Modal starts*/}
      
                  <ModalReturns returnsOpen={returnsIsOpen} returnsClose={toggleReturnsClose}>
                    <div className="modal-text">
                      <h1 className="p-10">Holiday Returns</h1>
                      <p className="p-10">
                      For eligible products received between now and 12/25/2022, you have until 1/8/2023 to initiate a return.
                      </p>
            
                      
                    </div>
                  </ModalReturns>
                  <div className="card-banner" onClick={toggleReturnsOpen}>
                    <svg
                      className="card-banner-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 56"
                      aria-hidden="true"
                      role="img"
                    >
                      <g>
                        <rect width="49" height="56" fill="none"></rect>
                        <path d="m0 0h52v56h-52z" fill="none"></path>
                        <path
                          d="m49.4019 16.719-13-7.1197c-.7481-.4098-1.575-.6146-2.4019-.6146s-1.6538.2048-2.4019.6146l-13 7.1197c-1.602.8774-2.5981 2.5587-2.5981 4.3854v5.8956h2v-5.8956c0-.2562.0391-.506.1013-.7476l14.8987 8.5077v15.9559c-.1492-.0531-.3018-.0975-.4412-.1738l-13-7.1197c-.9614-.5267-1.5588-1.5349-1.5588-2.6313v-1.8956h-2v1.8956c0 1.8267.9961 3.5079 2.5981 4.3854l13 7.1197c.748.4097 1.575.6146 2.4019.6146s1.6538-.2049 2.4019-.6146l13-7.1197c1.602-.8774 2.5981-2.5587 2.5981-4.3854v-13.7912c0-1.8267-.9961-3.508-2.5981-4.3854zm-16.8431-5.3655c.4404-.2413.939-.3688 1.4412-.3688s1.0007.1275 1.4412.3688l13 7.1196c.1169.064.21.1554.3157.2329l-6.1394 3.5058-14.8081-8.2572zm-13.3156 7.3526c.1057-.0775.1987-.1689.3157-.2329l6.1782-3.3836 14.8511 8.2811-6.5882 3.7621zm30.7568 16.1895c0 1.0964-.5974 2.1046-1.5588 2.6312l-13 7.1197c-.1394.0763-.292.1208-.4412.1739v-15.9559l14.8987-8.5077c.0622.2416.1013.4913.1013.7476zm-32-3.8956h-2-11.9355l5.293 5.293c.3906.3906.3906 1.0234 0 1.4141-.1954.1952-.4513.2929-.7071.2929s-.5117-.0977-.707-.293l-7-7c-.3906-.3906-.3906-1.0234 0-1.4141l7-7c.3906-.3906 1.0234-.3906 1.4141 0s.3906 1.0234 0 1.4141l-5.293 5.293h11.9355 2 3.375c.5527 0 1 .4478 1 1s-.4473 1-1 1z"
                          fill="#fc1e60"
                        ></path>
                      </g>
                    </svg>
                    <h3 className="card-banner-text">
                      Free{" "}
                      <span className="red-highlight card-banner-texts">
                        extended returns
                      </span>{" "}
                      between now and 1/8/23.
                    </h3>
                  </div>
            
                  {/*Returns Modal ends*/}

      {/*Payment Modal starts*/}
    
                  <ModalPayment paymentOpen={paymentIsOpen}  paymentClose={togglePaymentClose}>
                    <div className="modal-text">
                      <h1 className="p-10">Visa Card Monthly Installments</h1>
                      <p className="p-10">
                      Buy your next Product, or eligible accessories interest‑free◊ with Visa Card when you choose to check out with Visa Card Monthly Installments. Terms apply.
                      </p>
            
                      <h2 className="p-10">Visa Card</h2>
                      <p className="p-10">
                      Pay with your Visa Card and get 5% Daily Cash back on any purchase from myStore.
                      </p>
                    </div>
                  </ModalPayment>
                  <div className="card-banner" onClick={togglePaymentOpen}>
                    <svg
                      className="card-banner-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 42 56"
                      aria-hidden="true"
                      role="img"
                    >
                      <g>
                        <rect width="42" height="56" fill="none"></rect>
                        <path
                          d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                          fill="#6cca4e"
                        ></path>
                      </g>
                    </svg>
                    <h3 className="card-banner-text">
                      Pay in full or
                      <span className="green-highlight card-banner-texts">
                        {" "}
                        pay over time.
                      </span>{" "}
                      Your choice.
                    </h3>
                  </div>
            
                  {/*Payment Modal ends*/}
      


    </div>
  );
}

export default ModalBanner;
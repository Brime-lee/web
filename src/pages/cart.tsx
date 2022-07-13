//@ts-nocheck
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SimilarPlacesSlider from '../components/SimilarPlacesSlider';
import { useSelector } from 'react-redux';
import { addItem, remItem } from '../redux/checkOutRedux';
import { useDispatch } from 'react-redux';
import ProductCard from '../components/RestaurantDetails/ProductCard';

interface ActiveProps {
  active?: boolean;
}

const Main = styled.div`
  font-family: 'Montserrat';
  max-width: 1600px;

  h2 {
    width: 450px;
    height: 50px;
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #343434;
  }
`;

const Section = styled.div`
  margin: 0;
  height: auto;
  max-width: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Section1 = styled.div`
  width: 60%;
  margin-left: 64px;

  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 28px;
  }

  @media (min-width: 840px) {
    overflow-y: scroll;
  }
`;

const Section2 = styled.div`
  width: 40%;
  height: 800px;
  border-radius: 8px 8px 0px 0px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    margin-right: 0px;
    flex-direction: column-reverse;
  }
`;

const InnerSection = styled.div`
  max-width: 1600px;
  height: 28px;
  background: rgba(250, 241, 237, 0.7);
`;

const Box1 = styled.div`
  display: flex;
  font-family: 'Montserrat';
  justify-content: space-around;
  align-items: center;
  width: 792px;
  height: 130.11px;
  margin: 8px;
  background: #ffffff;
  /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 8px;
  span {
    color: #eb2a24;
    font-weight: 500;
    font-size: 16px;
  }
  p {
    margin: 0;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.6);
  }

  div {
    h4 {
      font-weight: 500;
      font-size: 22px;
      letter-spacing: 0.25px;
      color: #12121f;
    }
  }
`;

const Box2 = styled.div`
  align-items: center;
  text-align: center;
  max-width: 364px;
  height: 392px;
  background: #fbfbfb;
  border: 1px solid #dadada;
  box-sizing: border-box;
  box-shadow: 0px 4px 13px rgba(103, 34, 0, 0.17);
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  h4 {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.25px;
    color: #12121f;
  }

  h5 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #ff9916;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
  }

  // @media (max-width: 900px) {
  //   margin-left: 28px;
  //   margin-top: 28px;
  // }
`;

const Box2a = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 364px;
  height: 392px;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 10px;

  h4 {
    font-size: 18px;
    line-height: 24px;
    color: #5b5b5b;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    margin-left: 28px;
  }
`;

const Line = styled.div`
  margin: auto;
  width: 314px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  color: #fff;
  border: none;
  width: 200px;
  height: 48px;
  background: #ff9916;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const cart = () => {
  const [total, setTotal] = useState();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = cart && cart.item.reduce((acc, curr) => acc + Number(curr.price) * curr.count, 0);
    setTotal(sum);
  }, [cart]);

  // const getTotalPrice = () => {
  //   return cart.reduce((accumulator, item) => accumulator + item.count * item.price, 0);
  // };

  const vat = total * 0.075;
  const grandTotal = total + vat;

  return (
    <>
      {/* <Nav /> */}
      <Main>
        {cart.length == 0 ? (
          <p> No items have been added to cart yet</p>
        ) : (
          <>
            <h3 className={styles.cartStyle}>Cart</h3>
            <Section>
              <Section1>
                {cart.item.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Section1>
              <Section2>
                <Box2>
                  <img src={cart[0].logo} />
                  <div>
                    <h4>{cart[0].name}</h4>
                  </div>
                  <div>
                    <p>{cart[0].desc}</p>
                  </div>
                </Box2>
                <Box2a>
                  {/* <CheckOut /> */}
                  <div>
                    <h4> Order Summary </h4>
                    <div>
                      <div className={styles.subTotal}>
                        <p> Sub Total</p>
                        <h5 className={styles.h5ForSubTotal}> ₦{total} </h5>
                      </div>
                      <div className={styles.subTotal}>
                        <p> VAT </p>
                        <h5 className={styles.h5ForSubTotal}> ₦{vat} </h5>
                      </div>
                      <Line />
                      <div className={styles.subTotal}>
                        <p> Total </p>
                        <h5 className={styles.h5ForSubTotal}>₦{grandTotal}</h5>
                      </div>
                    </div>
                    <Button> Proceed to Checkout </Button>
                  </div>
                </Box2a>
              </Section2>
            </Section>
          </>
        )}
        <InnerSection />
        <h2> Similar Places </h2>
        <SimilarPlacesSlider />
        {/* <Influencers /> */}
      </Main>
    </>
  );
};

export default cart;

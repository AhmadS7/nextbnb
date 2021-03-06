/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState } from 'react';
import houses from '../../houses.js';
import Layout from '../../components/Layout';
import DateRangePicker from '../../components/DateRangePicker.js';
import { useStoreActions } from 'easy-peasy';

export default function House(props) {
  const [dateChosen, setDateChosen] = useState(false);
  const [numberOfNightsBetweenDates, setNumberOfNightsBetweenDates] =
    useState(0);

  const setShowLoginModal = useStoreActions(
    (actions) => actions.modals.setShowLoginModal
  );

  const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate); //clone
    const end = new Date(endDate); //clone
    let dayCount = 0;

    while (end > start) {
      dayCount++;
      start.setDate(start.getDate() + 1);
    }

    return dayCount;
  };
  return (
    <Layout
      content={
        <div className="container">
          <Head>
            <title>{props.house.title}</title>
          </Head>
          <article>
            <img
              src={props.house.picture}
              width="100%"
              alt="House Picture"
              style={{ boxShadow: '0px 5px 5px rgba(0,0,0,0.4)' }}
            />
            <p>
              {props.house.type} - {props.house.town}
            </p>

            <p>{props.house.title}</p>
          </article>
          <aside>
            <h2>Choose a Date</h2>
            <DateRangePicker
              datesChanged={(startDate, endDate) => {
                setNumberOfNightsBetweenDates(
                  calcNumberOfNightsBetweenDates(startDate, endDate)
                );
                setDateChosen(true);
              }}
            />
            {dateChosen && (
              <div>
                <h2>Price per night</h2>
                <p>${props.house.price}</p>
                <h2>Total price for booking</h2>
                <p>
                  ${(numberOfNightsBetweenDates * props.house.price).toFixed(2)}
                </p>
                <button onClick={() => setShowLoginModal()} className="reserve">
                  Reserve
                </button>
              </div>
            )}
          </aside>

          <style jsx="true">{`
            .container {
              display: grid;
              grid-template-columns: 60% 40%;
              grid-gap: 30px;
            }
            aside {
              border: 1px solid #ccc;
              padding: 20px;
              box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
            }
          `}</style>
        </div>
      }
    />
  );
}
export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0]
    }
  };
}

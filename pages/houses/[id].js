/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';
import houses from '../../houses.js';
import Layout from '../../components/Layout';

export default function House(props) {
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
          <aside></aside>
          <style jsx>{`
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

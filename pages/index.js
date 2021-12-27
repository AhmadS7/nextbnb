import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// houses data
import houses from '../houses';
import House from '../components/House';

export default function Home() {
  return (
    <div>
      <h2>Places to Comfort</h2>
      <div className="houses">
        {houses.map((house, index) => {
          return <House key={index} {...house} />;
        })}
      </div>
      <style jsx>
        {`
          .houses {
            display: grid;
            grid-template-columns: 49% 49%;
            grid-tenokate-rows: 300px 300px;
            grid-gap: 2%;
          }
        `}
      </style>
    </div>
  );
}

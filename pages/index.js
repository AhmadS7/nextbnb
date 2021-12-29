import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// houses data
import houses from '../houses';
import House from '../components/House';

export default function Home() {
  return (
    <div>
      <h2
        style={{
          backgroundColor: '#061d33ba',
          padding: '1.5rem',
          borderRadius: '.76rem',
          textAlign: 'center',
          fontSize: '2rem',
          boxShadow: '0px 5px 5px rgba(0,0,0,0.4)',
          color: '#d4cae2d1'
        }}
      >
        Places to Stay, For Your Comfort
      </h2>
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

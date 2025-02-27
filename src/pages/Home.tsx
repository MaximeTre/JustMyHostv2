import React from 'react';
import PageTransition from '../components/PageTransition';
import HomeLayout from '../components/HomeLayout';
import Hero from '../components/Hero';
import GameServers from '../components/GameServers';
import Infrastructure from '../components/Infrastructure';
import Reviews from '../components/Reviews';
import PaymentMethods from '../components/PaymentMethods';
import FAQ from '../components/FAQ';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <PageTransition>
      <HomeLayout>
        <main>
          <Hero />
          <ProductCard />
          <Infrastructure />
          <GameServers />
          <Reviews />
          <FAQ />
          <PaymentMethods />
        </main>
      </HomeLayout>
    </PageTransition>
  );
}
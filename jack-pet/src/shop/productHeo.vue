<template>
    <div class="Shop-hero">
      <h1 class="text-3xl font-bold mb-4 text-center text-white pt-10 pb-10">Welcome to our shop</h1>
      <div class="carousel rounded-box">
        <div v-for="item in caro" :key="item.id" class="carousel-item">
          <img :src="item.imageSrc" :alt="item.name" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const caro = [
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca1.png',
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca2.png',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca3.png',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca4.png',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca5.png',
      },
      {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca6.png',
      },
      {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'ca7.png',
      },
      // More products...
    ]
  </script>
  
<template>
    <div class="Shop-hero lg:pb-4 pb-4">
      <h1 class="text-3xl font-bold mb-4 text-center text-white pt-10 pb-10">Welcome to our donation</h1>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        <div v-for="donation in donations" :key="donation.id" class="group relative">
          <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img :src="donation.imageSrc" :alt="donation.imageAlt" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{{ donation.name }}</h2>
              <h2 class="card-title">{{ donation.price }}</h2>
              <p>{{ donation.description }}</p>
              <div class="card-actions">
                <button class="btn bg-red-btn">Get Membership</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  const donations = [
    {
      id: 1,
      name: 'Basic Supporter',
      href: '#',
      price:'$10',
      imageSrc: 'don1.png',
      imageAlt: 'Donation Image',
      description: 'By choosing the Basic Supporter package, you can make a meaningful contribution to our cause. Your donation will help us provide food, medical care, and shelter for animals in need.'
    },
    {
      id: 2,
      name: 'Silver Sponsor Supporter',
      href: '#',
      price:'$25',
      imageSrc: 'don2.png',
      imageAlt: 'Donation Image',
      description: 'As a Silver Sponsor, your generosity goes a long way in supporting our mission. Your donation will assist us in rescuing and rehabilitating animals, promoting responsible pet ownership, and maintaining their overall well-being.',
    },
    {
      id: 3,
      name: 'Gold Patron',
      href: '#',
      price:'$50',
      imageSrc: 'don3.png',
      imageAlt: 'Donation Image',
      description: 'Become a Gold Patron and make a significant impact on the lives of animals. Your donation will contribute to veterinary care, adoption programs, and educational initiatives that raise awareness about animal welfare.'
    },
    {
      id: 1,
      name: 'Platinum Partner',
      href: '#',
      price:'$100',
      imageSrc: 'don4.png',
      imageAlt: 'Donation Image',
      description: 'Join our Platinum Partner program and play a vital role in our efforts to make a difference for animals. Your donation will support spay/neuter initiatives, provide for special needs animals, and aid in wildlife conservation., give me a bult points'
    }
  ];
  </script>
  
  
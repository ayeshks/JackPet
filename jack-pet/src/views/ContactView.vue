<template>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 pb-4">
<div class="w-full md:w-96 md:max-w-full mx-auto pl-4 text-white">
    <h2 class="text-3xl font-bold mb-4 text-white">Contact Us</h2>
  <p class="text-gray-600 mb-6 text-white">Feel free to reach out to us for any inquiries or assistance.</p>
  
  <div class="contact-info">
    <div class="flex items-center mb-4">
      <span class="mr-2">
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </span>
      <a href="tel:123456789" class="text-white"><Contactpro contact="+94778263338"/></a>
    </div>
    
    <div class="flex items-center mb-4">
      <span class="mr-2">
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </span>
      <a href="mailto:info@example.com" class="text-white"><Contactpro contact="helo@jackpet.com"/></a>
    </div>
    
    <div class="flex items-center">
      <span class="mr-2">
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </span>
      <span class="text-text-white"><Contactpro contact="39/ b Tenna, Matale, SriLanka"/></span>
    </div>
  </div>
</div>
<div class="w-full md:w-96 md:max-w-full mx-auto">
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="https://herotofu.com/start">
      <label class="block mb-6">
        <span class="text-white">Your name</span>
        <input
          type="text"
          name="name"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Jhon"
        />
      </label>
      <label class="block mb-6">
        <span class="text-white">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="jhon@jackpet.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-white">Message</span>
        <textarea
          name="message"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Tell us what you're thinking about..."
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-indigo-100
            bg-red-btn
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Contact Us
        </button>
      </div>
    </form>
  </div>
</div>

</div>

</template>
<script>
  import Contactpro from '../components/Contactpro.vue'

export default {
    name:'contact',
    components: {
        Contactpro,

    }
    
}

</script>
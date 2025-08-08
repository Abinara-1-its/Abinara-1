<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <h2
      data-aos="fade-down"
      class="place-self-center mt-30 md:mt-20 3xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold leading-tight gradient-text"
    >
      Road to Advance 2025
    </h2>
    <h4 class="text-center 3xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs italic text-gray-500 mt-4 max-w-3xl" data-aos="zoom-in">“Discover. Learn. Build. Your Robotic Foundation Begins Here”</h4>
    <div class="w-full max-w-3xl p-8 space-y-6 mt-10 bg-white rounded-2xl shadow-2xl mb-30">
      <h1 class="text-3xl font-bold text-center text-gray-900">Workshop Registration Form</h1>
      
      <div class="text-center">
        <button 
          type="button" 
          @click="togglePoster" 
          class="px-8 py-3 overflow-hidden font-bold cursor-pointer text-white bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          {{ isPosterVisible ? 'Hide Poster' : 'Lihat Poster Workshop' }}
        </button>
      </div>

      <div v-if="isPosterVisible" class="mt-4 transition-all duration-500 ease-in-out">
        <img src="/poster-advance1.png" alt="Poster Workshop" class="w-full h-auto rounded-lg shadow-md border-2 border-red-200">
      </div>
      
      <form 
        @submit.prevent="handleSubmit"
        class="space-y-6"
      >
        <div v-if="message" :class="isError ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'" class="border px-4 py-3 rounded-md" role="alert">
          <p class="font-bold">{{ isError ? 'Terjadi Kesalahan' : 'Berhasil!' }}</p>
          <p class="text-sm">{{ message }}</p>
        </div>

        <div>
          <label for="Nama" class="block text-sm font-semibold text-gray-700">Nama Lengkap *</label>
          <input 
            v-model="formData.Nama"
            id="Nama"
            name="Nama" 
            type="text" 
            placeholder="Tulis Nama Lengkap" 
            required
            autocomplete="name"
            class="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
        </div>

        <div>
          <label for="NRP" class="block text-sm font-semibold text-gray-700">NRP / NIM *</label>
          <input 
            v-model="formData.NRP"
            id="NRP"
            name="NRP" 
            type="text" 
            placeholder="NRP atau NIM kamu" 
            required
            autocomplete="off"
            class="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
        </div>
        
        <div>
          <label for="Asal-Universitas" class="block text-sm font-semibold text-gray-700">Asal Instansi *</label>
          <input 
            v-model="formData['Asal Universitas']"
            id="Asal-Universitas"
            name="Asal Universitas" 
            type="text" 
            placeholder="Ex: Institut Teknologi Sepuluh Nopember" 
            required
            autocomplete="organization"
            class="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
        </div>

        <div>
          <label for="Departemen" class="block text-sm font-semibold text-gray-700">Departemen / Jurusan *</label>
          <input
            v-model="formData.Departemen"
            id="Departemen"
            name="Departemen" 
            type="text" 
            placeholder="Ex: Teknik Mesin" 
            required
            autocomplete="off"
            class="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
        </div>

        <div>
          <label for="No-WA" class="block text-sm font-semibold text-gray-700">No. WA *</label>
          <input 
            v-model="formData['No. WA']"
            id="No-WA"
            name="No. WA" 
            type="tel" 
            placeholder="Ex: 083381811827" 
            required
            autocomplete="tel"
            class="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
        </div>

        <div>
          <label for="Email" class="block text-sm font-semibold text-gray-700">Email *</label>
          <input 
            v-model="formData.Email"
            id="Email"
            name="Email" 
            type="email" 
            placeholder="Ex: example@gmail.com" 
            required
            autocomplete="email"
            class="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700">Paket Pilihan *</label>
          <div class="mt-2 space-y-2">
            <div class="flex items-center">
              <input 
                v-model="formData['Paket Pilihan']"
                id="paket-a"
                name="Paket Pilihan"
                type="checkbox"
                value="Paket Programming"
                class="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
              >
              <label for="paket-a" class="ml-2 block text-sm text-gray-900">Paket Programming</label>
            </div>
            <div class="flex items-center">
              <input 
                v-model="formData['Paket Pilihan']"
                id="paket-b"
                name="Paket Pilihan"
                type="checkbox"
                value="Paket Electrical"
                class="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
              >
              <label for="paket-b" class="ml-2 block text-sm text-gray-900">Paket Electrical</label>
            </div>
            <div class="flex items-center">
              <input 
                v-model="formData['Paket Pilihan']"
                id="paket-c"
                name="Paket Pilihan"
                type="checkbox"
                value="Paket Mechanical"
                class="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
              >
              <label for="paket-c" class="ml-2 block text-sm text-gray-900">Paket Mechanical</label>
            </div>
          </div>
        </div>

        <div class="p-4 my-4 border border-red-200 rounded-lg bg-red-50">
          <h3 class="text-lg font-semibold text-gray-800">Informasi Pembayaran</h3>
          <div class="mt-3 p-3 bg-white border border-gray-300 rounded-md">
            <p class="font-semibold text-gray-800">Detail Harga:</p>
            <ul class="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
              <li><strong>25k /material</strong> (1 paket)</li>
              <li><strong>45k /bundling</strong> (2 paket)</li>
              <li><strong>60k all in</strong> (semua paket)</li>
            </ul>
          </div>
          <p class="mt-4 text-sm text-gray-600">
            Maaf, Dana only
          </p>
          <div class="mt-2 p-3 bg-white border border-gray-300 rounded-md">
            <p class="font-mono text-gray-800">
              <strong>E-Wallet:</strong> Dana<br>
              <strong>No. Dana:</strong> 081217201066<br>
              <strong>Atas Nama:</strong> Dipta Sena Alfarehzi Djomi
            </p>
          </div>
          <p class="mt-2 text-xs text-gray-500 italic">
            Setelah melakukan pembayaran, langsung upload bukti pembayaran di bawah ini yaa:)
          </p>
        </div>

        <div>
          <label for="Bukti-Pembayaran" class="block text-sm font-semibold text-gray-700">Bukti Pembayaran *</label>
          <input 
            @change="handleFileChange"
            id="Bukti-Pembayaran"
            name="Bukti Pembayaran" 
            type="file" 
            accept="image/*"
            required
            class="w-full text-sm text-gray-500 cursor-pointer mt-2
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-red-50 file:text-red-700
                   hover:file:bg-red-100"
          >
        </div>
        
        <div v-if="fileData.base64" class="mt-2">
          <button 
            type="button" 
            @click="toggleImagePreview" 
            class="text-sm font-semibold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
          >
            {{ isImagePreviewVisible ? 'Hide Image' : 'Preview Image' }}
          </button>
          <div v-if="isImagePreviewVisible" class="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50">
            <img :src="fileData.base64" alt="Preview Bukti Pembayaran" class="max-w-full h-auto rounded-md shadow-sm">
          </div>
        </div>
        
        <div id="recaptcha-widget"></div>

        <button 
          type="submit"
          :disabled="isLoading"
          class="w-full mt-6 px-4 py-3 font-semibold text-xl text-white rounded-xl duration-500 ease-in-out"
          :class="isLoading 
            ? 'bg-red-500 cursor-not-allowed animate-pulse' 
            : 'bg-gradient-to-r from-red-600 to-red-900 cursor-pointer hover:scale-105'"
        >
          {{ isLoading ? 'Mohon Sabar, Lagi Ngirim...' : 'Yok di Submit!' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const scriptURL = 'https://script.google.com/macros/s/AKfycbztFq_YsT1Gexu0g-35-52fEYJaGjntuhrzsYdVNH-ElWHiGBBxssdAUmd0Bf_5xVtJAw/exec';

const formData = reactive({
  'Nama': '',
  'NRP': '',
  'Asal Universitas': '',
  'Departemen': '',
  'No. WA': '',
  'Email': '',
  'Paket Pilihan': [],
});

const fileData = ref({
  base64: '',
  name: '',
  type: ''
});

const isLoading = ref(false);
const message = ref('');
const isError = ref(false);
const isImagePreviewVisible = ref(false);
const isPosterVisible = ref(false);

const togglePoster = () => {
  isPosterVisible.value = !isPosterVisible.value;
};

const toggleImagePreview = () => {
  isImagePreviewVisible.value = !isImagePreviewVisible.value;
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  isImagePreviewVisible.value = false;
  
  if (!file) {
    fileData.value = { base64: '', name: '', type: '' };
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    fileData.value = {
      base64: event.target.result,
      name: file.name,
      type: file.type
    };
  };
  reader.readAsDataURL(file);
};

const recaptchaToken = ref('');

const onRecaptchaVerified = (token) => {
  recaptchaToken.value = token;
};

onMounted(() => {
  const checkRecaptcha = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) {
      clearInterval(checkRecaptcha);
      window.grecaptcha.render('recaptcha-widget', {
        'sitekey': '6LdZIJ4rAAAAAHyYjA01c4WZl8HdPrQ7BKPhIUyO',
        'callback': onRecaptchaVerified,
      });
    }
  }, 100);
});

const honeypot = ref('');

const handleSubmit = async () => {
    if (!recaptchaToken.value) {
      message.value = 'Mohon verifikasi bahwa kamu bukan robot!';
      isError.value = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (formData['Paket Pilihan'].length === 0) {
      message.value = 'Tolong pilih minimal satu paket pilihan yaa!';
      isError.value = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!fileData.value.base64) {
    message.value = 'Upload bukti pembayaran yaa!';
    isError.value = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
    }

    isLoading.value = true;
    message.value = '';
    isError.value = false;

    const finalForm = new FormData();

    for (const key in formData) {
      finalForm.append(key, formData[key]);
    }

    finalForm.append('fileData', fileData.value.base64);
    finalForm.append('fileName', fileData.value.name);
    finalForm.append('mimeType', fileData.value.type);
    finalForm.append('g-recaptcha-response', recaptchaToken.value);
    finalForm.append('comment', honeypot.value);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: finalForm });
      const result = await response.json();

      if (result.result === 'success') {
        message.value = 'Data Anda telah berhasil terkirim. Matur Nuwun!';
        isError.value = false;

        Object.keys(formData).forEach(key => {
          if (Array.isArray(formData[key])) {
            formData[key] = [];
          } else {
            formData[key] = '';
          }
        });
        fileData.value = { base64: '', name: '', type: '' };
        isImagePreviewVisible.value = false;

        document.getElementById('Bukti-Pembayaran').value = null;
        
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        recaptchaToken.value = '';

        // Reload page after 5 seconds
        // setTimeout(() => {
        //   alert('Formulir akan dimuat ulang untuk pengisian berikutnya.');
        //   window.location.reload();
        // }, 5000);
      } 
      else {
        throw new Error(result.error || 'Terjadi kesalahan! Tolong Laporkan via DM Instagram Kami');
      }
    } 
    catch (error) {
      message.value = `Gagal mengirim data: ${error.message}`;
      isError.value = true;
    } 
    finally {
      isLoading.value = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};  
</script>

<style scoped>

</style>
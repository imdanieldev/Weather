<template>
  <div
    class="
      min-h-screen
      w-full
      flex flex-col
      justify-around
      items-center
      bg-gray-100
    "
  >
    <section class="w-full h-12 grid place-items-center relative">
      <div class="px-2 w-full md:w-1/2 md:px-0 h-full">
        <input
          type="text"
          class="
            bg-white
            h-full
            w-full
            rounded-full
            px-3
            border-solid border-2 border-transparent
            focus:border-blue-600
            outline-none
            placeholder:text-blue-600
          "
          placeholder="Search City ..."
          v-model="searchText"
          @keypress="getWeather"
        />
      </div>
    </section>
    <Transition name="slide-fade" appear>
      <section
        class="
          w-full
          h-fit
          p-2
          md:p-0
          flex flex-col
          justify-center
          items-center
        "
        v-if="showBox"
      >
        <div
          class="
            w-full
            md:w-1/2
            min-h-[50vh]
            flex flex-col
            justify-around
            items-center
            bg-white
            rounded-lg
          "
        >
          <h1 class="text-4xl sm:text-6xl">
            {{ data.sys.country }}, {{ data.name }}
          </h1>
          <p class="text-2xl sm:text-4xl">{{ Math.floor(data.main.temp) }} C</p>
          <p class="text-2xl sm:text-4xl">
            {{ data.weather[0].main }}
          </p>
        </div>
      </section>
    </Transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: "",
      showBox: false,
      api: "https://api.openweathermap.org/data/2.5/weather?",
      api_key: "802f825e97e23c19e2d1548a387ff4a5",
      data: "",
    };
  },
  methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        if (this.searchText != "") {
          fetch(
            `${this.api}q=${this.searchText}&appid=${this.api_key}&units=metric `
          )
            .then((res) => {
              return res.json();
            })
            .then((response) => {
              this.data = response;
            });
          this.showBox = true;
        }
	   else{
		this.showBox = false;
	   }
      }
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
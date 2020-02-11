<template>
  <div class="select-container">
    <select v-model="selectedRegion" class="selections">
      <option value="" disabled selected>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropdownFilter',
  data() {
    return {
      selectedRegion: ''
    }
  }
}
</script>

<style lang="scss">

select::-ms-expand {
  display: none;
}

.selections {
  width: 17rem;  
  padding: 1.3rem;
  @include mode-colors;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0px 2px rgba($black, 0.25);
}

input:focus::placeholder {
  color: transparent;
}

</style>
<template>
    <a class="cardBody" target="_blank" :href="cardInfo.url">
        <img class="cardLogo" v-if="cardInfo?.logo" :src="cardInfo.logo">
        <div class="cardLogo" v-else>{{ cardInfo.name[0] }}</div>
        <div class="languageName" id="cardName">{{ cardInfo.name }}</div>
        <div class="cardLanguages">
            <div class="language" v-for="language in cardInfo.languages">
                <img :src="language.image" :alt="language.name" class="languageImage">
                <div class="languageName">{{ language.name }}</div>
            </div>
        </div>
    </a>
</template>

<script setup>

const props = defineProps({
    cardInfo: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
a {
    text-decoration: none;
    margin: 0;
    padding: 0;
}

.cardBody {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    height: 400px;
    width: 220px;
    background-color: #1a1a1a;
    border-radius: 4px;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    transition: 250ms ease;
}

.cardBody:hover {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
}

.cardLogo {
    font-size: 3rem;
    height: 62px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

#cardName {
    top: 105px;
    height: fit-content;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 0.4rem;
}

.cardBody:hover #cardName {
    opacity: 1;
}

.cardLanguages {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 8px;
    max-width: 112px;
    flex-wrap: wrap;
}

.languageName {
    position: absolute;
    bottom: -30px;
    letter-spacing: 0.05rem;
    font-size: 0.6rem;
    color: white;
    user-select: none;
    background-color: #131313;
    padding: 0.2rem;
    border-radius: 3px;
    transition: 150ms ease;
    opacity: 0;
    pointer-events: none;
}

.language {
    cursor: default;
    height: 20px;
}

.language:hover .languageName {
    opacity: 1;
}

.languageImage {
    width: inherit;
    height: inherit;
}
</style>
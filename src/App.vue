<template>
    <div id="main">
        <div id="hero">
            <div class="title">MORGAN</div>
                <div id="subText">a 16yo self-taught programmer</div>
            <div class="iconList">
                <a href="https://github.com/crackheadakira/" target="_blank"><img src="/assets/images/socials/githublogolight.png" width="32px" height="32px" alt="Github" /></a>
                <a href="https://youtube.com/c/akiraoncrack/" target="_blank"><img src="/assets/images/socials/youtubelogolight.png" width="32px" height="32px" alt="Youtube" /></a>
            </div>
        </div>
        <div id="projectTab">
            <ProjectCard v-for="project of projects" :cardInfo="project" />
        </div>
    </div>
</template>

<script setup>
import ProjectCard from "./components/ProjectCard.vue";
const projects = [{
    name: "Yuuko",
    url: "https://github.com/YuuCorp/Yuuko",
    languages: [
        {
            name: "JavaScript",
            image: "/assets/images/languages/javascript.png"
        },
        {
            name: "Node.js",
            image: "/assets/images/languages/nodejs.png"
        }
    ]
},
{
    name: "AniHilo",
    url: "https://github.com/crackheadakira/AniHilo",
    logo: "/assets/images/projects/anihilo.png",
    languages: [
        {
            name: "JavaScript",
            image: "/assets/images/languages/javascript.png"
        },
        {
            name: "CSS",
            image: "/assets/images/languages/css.png",
        },
        {
            name: "HTML",
            image: "/assets/images/languages/html.png"
        }
    ]
},
{
    name: "RoR2API",
    url: "https://github.com/crackheadakira/RoR2API",
    languages: [
        {
            name: "JavaScript",
            image: "/assets/images/languages/javascript.png"
        },
        {
            name: "Node.js",
            image: "/assets/images/languages/nodejs.png"
        }
    ]
}]
</script>

<style scoped>
#main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 32px;
    min-height: 100%;
    padding: 1rem;
}

#hero,
#projectTab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    overflow-wrap: break-word;
}

#projectTab {
    flex-direction: row;
    flex-wrap: wrap;
}

.title {
    font-size: 4rem;
    font-weight: 700;
    width: fit-content;
}

a {
    text-decoration: none;
    color: white;
    margin: 0.2rem;
}

a:hover {
    filter: brightness(80%);
}
</style>

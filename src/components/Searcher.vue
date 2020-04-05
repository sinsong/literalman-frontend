<template>
<div>
    <h1 class="title">Literal Kernel's Manual Pages</h1>
    <form id="search">
        <input type="text" :placeholder="placedText" id="query" v-model="item">
        <button id="man" @click.prevent="queryMan">man</button>
        <button id="apropos" @click.prevent="queryApropos">apropos</button>
        <select class="kinds" v-model="selected">
            <option v-for="section in sections" :value="section.index" :key="section.index">
                {{section.content}}
            </option>
        </select>
    </form>
</div>
</template>

<script>
import {GET_MAN_HTML} from '../store/mutation-types'

export default {
    name: "Searcher",
    data() {
        return {
            placedText: "input a cammand/function",
            item: '',
            selected: 0,
            sections: [
                {index: 0, content: 'All Sections'},
                {index: 1, content: '1 - General Commands'},
                {index: 2, content: '2 - System Calls'},
                {index: 3, content: '3 - Subroutines'},
                {index: 4, content: '4 - Special Files'},
                {index: 5, content: '5 - File Formats'},
                {index: 6, content: '6 - Games'},
                {index: 7, content: '7 - Macros and Conventions'},
                {index: 8, content: '8 - Maintenance Commands'},
                {index: 9, content: '9 - Kernel Interface'}
            ]
        }
    },
    methods: {
        queryMan() {
            this.$store.commit(GET_MAN_HTML, {
                section: this.selected,
                query: this.item
            })
        },

        queryApropos() {
            this.$store.commit(GET_MAN_HTML, {
                section: this.selected,
                query: this.item,
                apropos: 1
            })
        }
    }
}
</script>

<style scoped>
* {
  text-align: center;
  color: #2c3e50;
  margin-right: 5px;
}

.title {
    margin-top: 60px;
}
</style>
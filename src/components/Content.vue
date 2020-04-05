<template>
<div>
    <pre v-html="content">
    </pre>
</div>
</template>

<script>
import {GET_MAN_HTML} from '../store/mutation-types'

export default {
    name: "Content",
    updated() {
        this.helper()
    },
    mounted() {
        this.helper()
    },
    data() {
        return {
            //
        }
    },
    methods: {
        helper() {
            let links = document.getElementsByClassName('inter-link')
            let handle = this.handleClick
            console.log("upd")
            for (let l of links) {
                l.onclick = function(node) {
                    console.log(l)
                    return function() {
                        handle(node)
                    }
                }(l)
            }
        },
        handleClick(node) {
            console.log("test", node)
            this.$store.commit(GET_MAN_HTML, {
                section: node.dataset.section,
                query: node.dataset.item
            })
        }
    },
    computed: {
        content() {
            return this.$store.state.htmlContent.content
        }
    }
}
</script>

<style scoped>
pre {
    margin-left: 25%;
    margin-right: 25%;
    width: 100%;
}

pre > span {
    color: cornflowerblue;
}
</style>
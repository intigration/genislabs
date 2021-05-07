<template>
    <nav class="main-menu" :class="addClassNeme">
        <ul>
            <li class="has-children">
                <n-link to="/">CONSOLE</n-link>
            </li>
            <li class="has-children">
                <n-link to="/about">Labs</n-link>
            </li>
            <li class="has-children">
                <n-link to="/project">Automation</n-link>
                <ul class="submenu">
                    <li>
                        <n-link to="/project">Project</n-link>
                    </li>
                    <li>
                        <n-link to="/project-details">Project Details</n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="/blog">Learn</n-link>
                <ul class="submenu">
                    <li>
                        <n-link to="/blog">Blog</n-link>
                    </li>
                    <li>
                        <n-link to="/blog-details">Blog Details</n-link>
                    </li>
                </ul>
            </li>
            <li>
                <n-link to="/contact">Predict</n-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ["addClassNeme"]
    }
</script>
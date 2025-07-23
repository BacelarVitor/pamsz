<script>
    import { base } from "$app/paths";
    import '../global.css'
    import '@picocss/pico/css/pico.css';
</script>
<main class="container">
    <slot/>
</main>

<style>
    main {
        padding-top: 3rem;
    }
</style>
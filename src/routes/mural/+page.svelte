<script lang="ts">
  import { images } from '$lib/assets';
  // list
  const photos = Object.values(images);
  
</script>

<div class="mural">
  <!-- título + playlist -->
  <div class="playlist">
    <h2 class="title">Nossa Trilha Sonora 📀🎶</h2>
   <iframe 
      title="sua playlist"
      data-testid="embed-iframe" 
      style="border-radius:12px" 
      src="https://open.spotify.com/embed/playlist/1NazxhWPgQUdboYHGzuBSI?utm_source=generator" 
      width="100%" 
      height="152" 
      frameBorder="0" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>
  </div>

  <!-- mural de fotos -->
  <div class="grid">
    {#each photos as photo}
      <div class="item">
        <img src={photo} alt="nossa foto" />
      </div>
    {/each}
  </div>
</div>

<style>
  .mural {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  .playlist {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  /* estilo pinterest */
  .grid {
    column-count: 3; /* número de colunas */
    column-gap: 1rem;
  }

  .item {
    break-inside: avoid;
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
  }

  .item:hover {
    transform: scale(1.03);
  }

  .item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }

  /* responsivo */
  @media (max-width: 768px) {
    .grid {
      column-count: 2;
    }
  }

  @media (max-width: 480px) {
    .grid {
      column-count: 1;
    }
  }
</style>
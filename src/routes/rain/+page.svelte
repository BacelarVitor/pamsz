<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import { images } from '$lib/assets';

  console.log();
  /**
	 * @type {any[]}
	 */
  let drops = [];
  let wiggle = true;
  let raining = false;
  let dryMode = false; // 🌵 

  const waterEmojis = ["💧", "🌊", "🌧️", "☔", "🫧", "💦", "🚿"]; 
  const dryPhrases = [
    "Fui seco, mas estou me regando agora 💧",
    "Tudo aquilo que se rega, cresce 🌱💦",
    "Era só sede emocional mesmo 😅☔",
    "Desculpa, estou molhado de saudade 🌊",
    "Agora estou pingando carinho 💧❤️"
  ];

  const phrases = [
    "Você é tão linda! 💖",
    "Você merece tantas coisas boas ✨",
    "Sou grato por ter te conhecido 🌷",
    "Você é tão forte 💪 e inspiradora ✨",
    "Tão bela, por dentro e por fora 💫",
    "Tão meiga e doce como um pôr do sol 🌅",
    "Seu sorriso é meu lugar favorito 😍",
    "Você ilumina tudo à sua volta 🌟",
    "Um abraço apertado pra você 🤗",
    "Você é suficiente do jeitinho que é 🧡",
    "Você é muito amada 🥰",
    "Você tem um valor imenso 🌼",
    "Não é impossível ou difícil te amar 💘",
    "Você é admirável em tantos jeitos 🦋",
    "Você nunca está sozinha 🤝",
    "Você não é tão ruim no Overcooked assim 😂🍳",
    "Uma flor pra você 🌸",
    "💐💐💐 Um buquê de carinho só seu 💐💐💐",
    "Sempre que quiser, estarei aqui 🤍",
    "Sempre que precisar, me chama pra tc, gata 😽💌"
  ];

  const mediaItems = [
    { type: 'image', url: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg' },
    { type: 'image', url: 'https://s3.amazonaws.com/freecodecamp/running-cats.jpg' },
    { type: 'image', url: 'https://i.imgur.com/8ZjboA9.jpeg' },
    { type: 'image', url: 'https://i.imgur.com/RpBIba3.jpeg' },
    { type: 'image', url: 'https://i.imgur.com/rSy37ax.jpeg' },
    { type: 'image', url: 'https://i.imgur.com/IJ8znCF.jpeg' },
    { type: 'image', url: 'https://i.imgur.com/E6eoW1k.jpeg' },
    { type: 'image', url: 'https://i.imgur.com/aFQQVK4.jpeg' },
    { type: 'image', url: 'https://i.imgur.com/M35fen0.jpeg' },
    { type: 'video', url: 'https://i.imgur.com/CK8Hs1J.mp4' },
    { type: 'video', url: 'https://i.imgur.com/FvxWMVi.mp4' },
    ...Object.values(images).map(x => ({ type: 'image', url: x})),
  ];

  const preloadMedia = (items) => {
    items.forEach(item => {
        if (item.type === 'image') {
        const img = new Image();
        img.src = item.url;
        } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.url;
        video.preload = 'auto';
        }
    });
  };

  onMount(() => {
    preloadMedia(mediaItems);
  });
  /**
	 * @param {{ content: string; isImage: boolean; }[]} array
	 */
  function shuffle(array) {
    let a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startRain() {
    if (raining) return;
    raining = true;
    wiggle = false;
    drops = [];
    const allItems = shuffle([
    ...phrases.map(p => ({
        type: 'text',
        content: dryMode ? `${p} ${waterEmojis[Math.floor(Math.random() * waterEmojis.length)]}` : p // 💧
    })),
    ...(dryMode
        ? [{ type: 'text', content: dryPhrases[Math.floor(Math.random() * dryPhrases.length)] }] // 🌵 gracinha extra
        : []),
    ...mediaItems.map(({ type, url }) => ({ type, content: url }))
    ]);
    let count = 0;
    const total = allItems.length;

    const interval = setInterval(() => {
        const item = allItems[count];
        const x = Math.random() * 75;
        const topOffset = Math.random() * 100;

        drops = [
        ...drops,
        { id: crypto.randomUUID(), ...item, x, topOffset }
        ];

        count++;
        if (count >= total) {
            clearInterval(interval);
            raining = false;
            setTmeout(() => (wiggle = true), 500);
        }
    }, 1500); 
  }
</script>

<style>
  :global(body) {
    background-color: rgb(35, 42, 58); 
    color: #f1f1f1;
    font-family: system-ui, sans-serif;
    margin: 0;
    padding: 0;
  }

  .centered {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  .wiggle {
    animation: wiggle 0.6s ease-in-out ;
    animation-delay: 2s;
    animation-iteration-count: once;
  }

  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(3deg); }
    50% { transform: rotate(-3deg); }
    75% { transform: rotate(2deg); }
    100% { transform: rotate(0deg); }
  }

  button {
    background-color: #e0bbf8;
    color: #121212;
    border: none;
    padding: 0.7rem 1.4rem;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #d09ff0;
  }

  .drop {
    position: fixed;
    top: -50px;
    animation: fall 9s linear forwards;
    pointer-events: none;
    z-index: 9999;
  }

  @keyframes fall {
    to {
      top: 100vh;
      opacity: 0;
    }
  }

  .drop img {
    width: 50vw;
    max-width: 240px;
    height: auto;
    border-radius: 12px;
  }

  .drop-video {
    width: 40vw;
    max-width: 120px;
    border-radius: 12px;
  }

  .drop div {
    background: #fff;
    color: #111;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 0.95rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    max-width: 75vw;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  @media (max-width: 480px) {
    .drop img {
      max-width: 240px;
    }

    .drop-video {
        width: 150px;
    }
    .drop div {
      font-size: 0.85rem;
      padding: 0.4rem 0.8rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      padding: 0 1rem;
    }

    button {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
    }
  }
</style>

<main class="centered">
  <h1>Oi, Pâmela 💕</h1>
  <p>Você é especial e merece carinho até nos dias ruins.</p>
  <button class={wiggle ? 'wiggle' : ''} on:click={startRain}>
    Clique para um carinho ✨
  </button>
  <label style="margin-top: 1rem;">
    <input type="checkbox" role="switch" bind:checked={dryMode}>
    🌵 Modo Seco
  </label>

  {#each drops as drop (drop.id)}
    <div class="drop" style="left: {drop.x}vw; top: -{drop.topOffset}px;">
        {#if drop.type === 'image'}
            <img src={drop.content} alt="fofura" />
        {:else if drop.type === 'video'}
            <video
                src={drop.content}
                autoplay
                muted
                loop
                playsinline
                class="drop-video"
            ></video>
        {:else}
            <div>{drop.content}</div>
        {/if}
    </div>
  {/each}
</main>

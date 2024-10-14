console.log('test');

const canaliTwitch = [
    {
        nomeCanale: "Boolean_Twitch",
        categoriaStreaming: "Just Chatting",
        spettatori: Math.ceil(Math.random() * 501),
    },
    {
        nomeCanale: "GamerGirl",
        categoriaStreaming: "Just Chatting",
        spettatori: Math.ceil(Math.random() * 501),
    },
    {
        nomeCanale: "ProGamerX",
        categoriaStreaming: "Esports",
        spettatori: Math.ceil(Math.random() * 501),
    },
    {
        nomeCanale: "FunnyStreamer",
        categoriaStreaming: "Comedy",
        spettatori: Math.ceil(Math.random() * 501),
    },
    {
        nomeCanale: "MusicMaster",
        categoriaStreaming: "Music",
        spettatori: Math.ceil(Math.random() * 501),
    },
    {
        nomeCanale: "TechGuru",
        categoriaStreaming: "Technology",
        spettatori: Math.ceil(Math.random() * 501),
    },
    {
        nomeCanale: "ArtisticSoul",
        categoriaStreaming: "Art",
        spettatori: Math.ceil(Math.random() * 501),
    },
];

console.log(canaliTwitch);


for (let i = 0; i < canaliTwitch.length; i++){
    let canale = canaliTwitch[i];
    console.log(canale);

    const nome = canale.nomeCanale;
    const categoria = canale.categoriaStreaming;
    const spettatori = canale.spettatori;
    
    const markup = `
        <div class="row d-flex my-4">
            <div class="col-2 d-flex align-items-center ps-0">
              <img src="./assets/images-boolean.png" alt="" class=" circle" style="width: 50px; height: 50px">
            </div>
            <div class="col-7 d-flex flex-column justify-content-center">
              <h5 class="my-0" style="color: white;">${nome}</h5>
              <h6 class="my-0 pt-1" style="color: white; font-weight: 200;">${categoria}</h6>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-end px-0 " >
              <i class="fa-solid fa-circle pe-2" style="color: red; font-size: 10px;"></i>
              <span style="color: white;">${spettatori}</span>
            </div>
        </div>
    `
    document.getElementById('channels').innerHTML += markup
    
}


/* 
<div class="row d-flex my-2">
            <div class="col-3 d-flex align-items-center ps-0">
              <img src="./assets/images-boolean.png" alt="" class="w-100 circle">
            </div>
            <div class="col-6 d-flex flex-column justify-content-center">
              <h5 class="my-0" style="color: white;">Boolean</h5>
              <h6 class="my-0 pt-1" style="color: white; font-weight: 200;">Just chatting</h6>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-end px-0 " >
              <i class="fa-solid fa-circle pe-2" style="color: red; font-size: 10px;"></i>
              <span style="color: white;">100</span>
            </div>
</div>
<!-- /channel -->
*/
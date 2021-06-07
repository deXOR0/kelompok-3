const url = "https://indonesia-covid-19.mathdro.id/api/provinsi";

const card = document.getElementById("card");

let gambarr = [
  "https://cdn.discordapp.com/attachments/845261456499802143/845263427148185620/449px-Coat_of_arms_of_Jakarta.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263493720702986/512px-Coat_of_arms_of_West_Java.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263537526145044/526px-Coat_of_arms_of_Central_Java.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263647039291392/426px-Coat_of_arms_of_East_Java.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263704152342528/490px-Coat_of_arms_of_East_Kalimantan.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263758749335598/South_Sulawesi_coa.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263800370462740/559px-Coat_of_arms_of_Banten.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263847212056576/506px-Coat_of_arms_of_Bali.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263889885167646/335px-Coat_of_arms_of_Riau.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263934231806012/421px-Coat_of_arms_of_Yogyakarta.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845263978598236200/443px-Coat_of_arms_of_West_Sumatra.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845264033312931841/Coat_of_arms_of_South_Kalimantan.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845264082587746344/North_Sumatra_coa.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845264210350309376/432px-Coat_of_arms_of_Papua.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265250717663252/394px-Coat_of_arms_of_South_Sumatra.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265287011762196/451px-Coat_of_arms_of_Central_Kalimantan.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265323053416468/335px-Coat_of_arms_of_North_Sulawesi.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265370620624956/487px-Coat_of_arms_of_East_Nusa_Tenggara.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265422475198474/335px-Coat_of_arms_of_Bangka_Belitung_Islands.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265483468636170/432px-Coat_of_arms_of_Central_Sulawesi.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265563273527323/448px-Coat_of_arms_of_North_Kalimantan.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265615815573545/417px-Lampung_coa.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265671926317056/506px-Coat_of_arms_of_Aceh.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265722502545418/444px-Coat_of_arms_of_Southeast_Sulawesi.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265781738438706/335px-Coat_of_arms_of_West_Nusa_Tenggara.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265844040106035/Lambang_Riau_Kepulauan.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265896591458324/365px-Coat_of_arms_of_West_Papua.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845265931622285332/525px-Coat_of_arms_of_Maluku.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266007820075008/335px-Coat_of_arms_of_West_Kalimantan.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266057131851776/100px-Coat_of_arms_of_Jambi.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266127659335720/479px-Coat_of_arms_of_Bengkulu.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266186677518336/519px-Coat_of_arms_of_West_Sulawesi.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266349931364392/Lambang_propinsi_gorontalo.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266406580289536/522px-Coat_of_arms_of_North_Maluku.png",
  "https://cdn.discordapp.com/attachments/845261456499802143/845266406580289536/522px-Coat_of_arms_of_North_Maluku.png",
];

fetch(url)
  .then((response) => response.json())
  .then((data) => loadData(data));

const loadData = (data) => {
  console.log(JSON.stringify(data));
  const listofProvince = data["data"];
  console.log(listofProvince);
  let cardHTML = ``;
  for (let i = 0; i < listofProvince.length - 1; i++) {
    const provinceData = listofProvince[i];
    const gambar = gambarr[i];
    cardHTML += ` 
        <div class="col">
        <div class="card border-dark h-100 rounded shadow-lg"‌>
          <img src="${gambar}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${provinceData["provinsi"]}</h5>
            <p class="card-text"> 
              <table id="data-table" class="table">
              <tr>
              <th class="headtable">Positive </th>
              <th class="headtable">Recovered</th>
              <th class="headtable">Death</th>
               </tr>
               <tr>
            <td class="positif headtable">${provinceData["kasusPosi"]}</td>
            <td class="sembuh headtable">${provinceData["kasusSemb"]}</td>
            <td class="meninggal headtable">${provinceData["kasusMeni"]}</td>
            </tr>
              </table>
            </p>
          </div>
        </div>
      </div>
  `;
  }
  card.innerHTML = cardHTML;
};
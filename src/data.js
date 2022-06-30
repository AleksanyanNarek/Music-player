import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
        name: "Խորոտիկ",
        artist: "Ակունք» ազգագրական համույթ",
        id: uuidv4(),
        active: true,
        cover: "https://www.armenianmusic.am/data/images/composition/2/16357616937103/220x220c-center.jpeg",
        color: ["#ADB5C0","#79BFA3"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357616937153.mp3",        
    },
    {
        name: "Կտրիճ Դավո",
        artist: "Ակունք» ազգագրական համույթ",
        id: uuidv4(),
        active: false,
        cover: "https://armenianmusic.am/data/images/composition/2/16357613048768/220x220c-center.jpeg",
        color: ["#DFD9E4", "#3F3A40"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357613048812.mp3",
    },
    {
        name: "Նանի բալամ, նանի",
        artist: "Ակունք» ազգագրական համույթ",
        id: uuidv4(),
        active: false,
        cover: "https://armenianmusic.am/data/images/composition/1/16357594449647/220x220c-center.jpeg",
        color: ["#4D8497", "##8A864C"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357594449693.mp3",
    },
    {
        name: "Ելեք, տղերք",
        artist: "Ակունք» ազգագրական համույթ",
        id: uuidv4(),
        active: false,
        cover: "https://armenianmusic.am/data/images/composition/1/16357591510115/220x220c-center.jpeg",
        color: ["#FEF083", "#A2AC7C"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357591510164.mp3",
    },
    {
        name: "Լորիկ ջան",
        artist: "Ակունք» ազգագրական համույթ",
        id: uuidv4(),
        active: false,
        cover: "https://armenianmusic.am/data/images/composition/1/16357587265739/220x220c-center.jpeg",
        color: ["#546C54", "#C0CE5F"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357587265784.mp3",
    },
    {
        name: "Կաքավիկ",
        artist: "Մխիթար Սեբաստացի կրթօջախի երգչախումբ",
        id: uuidv4(),
        active: false,
        cover: "https://armenianmusic.am/data/images/composition/1/16357569252905/220x220c-center.jpeg",
        color: ["#D5100C", "#FAEB5E"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357569252968.mp3",
    },
    {
        name: "Տո լաո",
        artist: "Ակունք» ազգագրական համույթ",
        id: uuidv4(),
        active: false,
        cover: "https://armenianmusic.am/data/images/composition/1/16357577807238/220x220c-center.jpeg",
        color: ["#85493C", "#CBC9B6"],
        audio: "https://www.armenianmusic.am/data/files/composition/1/16357577807324.mp3",
    },
    ]
}


export default chillHop;
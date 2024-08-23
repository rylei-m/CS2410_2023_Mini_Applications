function generateMadLib() {
    let word1 = document.getElementById("word1").value;
    let word2 = document.getElementById("word2").value;
    let word3 = document.getElementById("word3").value;
    let word4 = document.getElementById("word4").value;
    let word5 = document.getElementById("word5").value;

    if (!word1 || !word2 || !word3 || !word4 || !word5) {
        document.getElementById("mLResult").innerText = "Please fill in all the words.";
        return;
    }

    let story = `In the lovely landscapes of the ${word2}, there lived a ${word1} named betty (like the Taylor Swift song). With her ${word3}-colored mane shimmering under the moonlight, she decided to embark on a grand journey.

    Her trusty ${word4}, kraig, carried her through forests, mountains, and deserts. They stumbled upon an ancient city, where beings communicated through emotions. Here, Betty was given a ${word3} talisman with mysterious powers.

    News of this talisman spread. An evil warlord sought its power and dispatched an army to seize it. A great battle ensued, with the fate of the ancient city at stake. Betty, with Kraig at her side, stood firm. The city was saved but at a heavy cost.

    Recognizing its significance, Betty decided to find the origin of the talisman. This quest led her to the peaks of the Skyward Mountains, where legends spoke of an oracle who knew the secrets of the universe. Along the way, she battled fierce beasts, encountered nomadic tribes, and unraveled mysteries of the ${word2}.

    At the summit, Betty met the oracle, a being of pure energy who communicated through feelings - the very feelings Betty had been wrestling with. It was here she discovered that her emotion of ${word5} was the key to unlocking the talisman's true power.

    Yet, with great power came great responsibility. The oracle warned Betty of an impending calamity that could consume the ${word2}. The warlord, not deterred by his earlier defeat, was amassing a force so great, even the combined might of the ancient city's protectors would falter.

    Betty, with her new-found knowledge and the powers of the talisman, returned to rally the defenders. Kingdoms united, old rivalries were set aside, and a grand alliance was formed. The world braced for the greatest battle it had ever seen.

    The war raged for days. Lands were shattered, skies turned to ash, and seas roared. But Lyria's leadership, combined with the power of unity, finally defeated the warlord's armies, bringing peace to the ${word2}.

    Exhausted, Betty decided to establish a sanctuary, a place where knowledge, emotions, and unity were celebrated. The ancient city grew around this sanctuary, becoming a beacon of hope.

    And thus, generations later, every corner of the ${word2} echoed with tales of Betty, the ${word1} with the ${word3}-colored mane, Kraig, her trusted ${word4}, and the epic war that defined the age.`;

    document.getElementById("mLResult").innerText = story;
}
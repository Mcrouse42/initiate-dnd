import React from 'react';

import { Card, ListGroup } from 'react-bootstrap';

const GenerateNPC = () => {
    const classes = [
        "Barbarian",
        "Bard",
        "Cleric",
        "Druid",
        "Fighter",
        "Monk",
        "Paladin",
        "Ranger",
        "Rogue",
        "Sorcerer",
        "Warlock",
        "Wizard",
    ];
    const races = [
        "Dragonborn",
        "Dwarf",
        "Elf",
        "Gnome",
        "Half-elf",
        "Halfing",
        "Half-orc",
        "Human",
        "Tiefling",
    ];
    const firstName = [
        "Argo",
        "Senic",
        "Elbane",
        "Irina",
        "Nilex",
        "Cornelius",
        "Kenton",
        "Loxie",
        "Jairo",
        "Laharo",
        "Jinn",
        "Valiant"
    ];
    const lastName = [
        "Grassdaft",
        "Havenglow",
        "Darkwind",
        "Whitetree",
        "Winterspear",
        "Mildcrest",
        "Morninghand",
        "Cliffwhirl",
        "Helltoe",
        "Rainslicer"
    ];
    const alignment = [
        "Lawful Good (Hero)",
        "Lawful Neutral (Judge)",
        "Lawful Evil (Tyrant)",
        "Neutral Good (Innocent)",
        "True Neutral (Peaceful)",
        "Neutral Evil (Sociopath)",
        "Chaotic Good (Vigilant)",
        "Chaotic Neutral (Free Spirit)",
        "Chaotic Evil (Tyrant)"
    ]
    const descriptionSex = [
        "Male",
        "Female",
        "Non-Binary"
    ];
    const descriptionEyeColor = [
        "Yellow",
        "Red",
        "Orange",
        "Green",
        "Blue",
        "Black",
        "Brown",
        "Hazel",
        "Gold"
    ];
    const personalityTraits = [
        "I idolize a particular hero of my faith and constantly refer to that person's deeds and example.",
        "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
        "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
        "Nothing can shake my optimistic attitude.",
        "I misquote the sacred texts and proverbs in almost every situation.",
        "I am tolerant of other faiths and respect the worship of other gods.",
        "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
        "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
        "I fall in and out of love easily, and am always pursuing someone.",
        "I have a joke for every occasion, especially occasions where humor is inappropriate.",
        "Flattery is my preferred trick for getting what I want.",
        "I'm a born gambler who can't resist taking a risk for a potential payoff.",
        "I lie about almost everything, even when there's no good reason to.",
        "Sarcasm and insults are my weapons of choice.",
        "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
        "I pocket anything I see that might have some value.",
        "I always have plan for what to do when things go wrong.",
        "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
        "The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden.",
        "I would rather make a new friend than a new enemy.",
        "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
        "I don't pay attention to the risks in a situation. Never tell me the odds.",
        "The best way to get me to do something is to tell me I can't do it.",
        "I blow up at the slightest insult.",
        "I know a story relevant to almost every situation.",
        "Whenever I come to a new place, I collect local rumors and spread gossip.",
        "I'm a hopeless romantic, always searching for that 'special someone'.",
        "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
        "I love a good insult, even one directed at me. ",
        "I get bitter if I'm not the center of attention",
        "I am utterly serene, even in the face of disaster.",
        "The leader of my community has something wise to say on every topic, and I am eager to share that wisdom.",
        "I feel tremendous empathy for all who suffer.",
        "I'm oblivious to etiquette and social expectations.",
        "I connect everything that happens to me to a grand cosmic plan.",
        "I often get lost in my own thoughts and contemplations, becoming oblivious to my surroundings.",
        "I am working on a grand philosophical theory and love sharing my ideas.",
        "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
        "The common folk love me for my kindness and generosity.",
        "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses",
        "I take great pains to always look my best and follow the latest fashions.",
        "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
        "Despite my birth, I do not place myself above other folk. We all have the same blood.",
        "My favor, once lost, is lost forever.",
        "If you do me an injury, I will crush you, ruin your name, and salt your fields.",
        "I'm driven by a wanderlust that led me away from home.",
        "I watch over my friends as if they were a litter of newborn pups. "     
    ];

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    };

    // npc information
    const npcClass = classes[Math.floor(Math.random() * classes.length)];
    const npcRace = races[Math.floor(Math.random() * races.length)];
    const npcFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const npcLastName = lastName[Math.floor(Math.random() * lastName.length)];
    const npcAlignment = alignment[Math.floor(Math.random() * alignment.length)];
    const npcGender = descriptionSex[Math.floor(Math.random() * descriptionSex.length)];
    const npcEyeColor = descriptionEyeColor[Math.floor(Math.random() * descriptionEyeColor.length)];
    const npcArmorClass = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcHitPoints = Math.floor(Math.random() * (100 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcStrengthStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcDexterityStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcConstitutionStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcIntelligenceStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcWisdomStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcCharismaStat = Math.floor(Math.random() * (20 - 10 + 10)) + 10; //(max - min + 1)) + min
    const npcPersonalityTraits = getRandom(personalityTraits, 4);
  
    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="text-primary display-inline-block">
                    Random NPC Generator!
                </h2>
            </div>

            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                    <Card className="p-3">
                        <ListGroup.Item><h5>First Name:</h5> {npcFirstName}</ListGroup.Item>
                        <ListGroup.Item><h5>Last Name:</h5> {npcLastName}</ListGroup.Item>
                        <ListGroup.Item><h5>Gender:</h5> {npcGender}</ListGroup.Item>
                        <ListGroup.Item><h5>Eye Color:</h5> {npcEyeColor}</ListGroup.Item>
                        <ListGroup.Item><h5>Class:</h5> {npcClass}</ListGroup.Item>
                        <ListGroup.Item><h5>Race:</h5> {npcRace}</ListGroup.Item>
                        <ListGroup.Item><h5>Armor Class:</h5> {npcArmorClass}</ListGroup.Item>
                        <ListGroup.Item><h5>Hit Points:</h5> {npcHitPoints}</ListGroup.Item>
                        <ListGroup.Item><h5>Strength:</h5> {npcStrengthStat}</ListGroup.Item>
                        <ListGroup.Item><h5>Dexterity:</h5> {npcDexterityStat}</ListGroup.Item>
                        <ListGroup.Item><h5>Constitution:</h5> {npcConstitutionStat}</ListGroup.Item>
                        <ListGroup.Item><h5>Intelligence:</h5> {npcIntelligenceStat}</ListGroup.Item>
                        <ListGroup.Item><h5>Wisdom:</h5> {npcWisdomStat}</ListGroup.Item>
                        <ListGroup.Item><h5>Charisma:</h5> {npcCharismaStat}</ListGroup.Item>
                        <ListGroup.Item><h5>Personality Traits:</h5></ListGroup.Item>
                        <ListGroup.Item>{npcPersonalityTraits[0]}</ListGroup.Item>
                        <ListGroup.Item>{npcPersonalityTraits[1]}</ListGroup.Item>
                        <ListGroup.Item>{npcPersonalityTraits[2]}</ListGroup.Item>
                        <ListGroup.Item>{npcPersonalityTraits[3]}</ListGroup.Item>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default GenerateNPC;

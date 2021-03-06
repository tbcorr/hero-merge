import React from 'react';
import { HeroList } from 'hero';

export default class HerosPage extends React.Component {

    render() {

        const data = [
            {
                "id": 1,
                "hero_name": "Batman",
                "real_name": "Bruce Wayne",
                "gender": "Male",
                "attributes": {
                "intelligence": 100,
                "strength": 17,
                "speed": 27,
                "durability": 50,
                "power": 46,
                "combat": 100
                },
                "powers": [
                "Martial Arts",
                "Weapons",
                "Super Intelligence"
                ],
                "weaknesses": [
                "Mortal"
                ]
            },
            {
                "id": 2,
                "hero_name": "Wonder Woman",
                "real_name": "Diana",
                "gender": "Female",
                "attributes": {
                "intelligence": 88,
                "strength": 100,
                "speed": 75,
                "durability": 100,
                "power": 69,
                "combat": 100
                },
                "powers": [
                "Flight",
                "Super-strength",
                "Super Speed"
                ],
                "weaknesses": []
            },
            {
                "id": 3,
                "hero_name": "Super Man",
                "real_name": "Clark Kent (Kal-El)",
                "gender": "Male",
                "attributes": {
                "intelligence": 100,
                "strength": 100,
                "speed": 100,
                "durability": 100,
                "power": 100,
                "combat": 65
                },
                "powers": [
                "Flight",
                "Super-strength",
                "Super Speed",
                "Super Hearing",
                "Super Smell",
                "Healing Factor",
                "Super Breath",
                "Heat Vision",
                "Super Vision"
                ],
                "weaknesses": [
                "Magic",
                "Kryptonite",
                "Lead",
                "Solar Energy"
                ]
            },
            {
                "id": 4,
                "hero_name": "Flash",
                "real_name": "Barry Allen",
                "gender": "Male",
                "attributes": {
                "intelligence": 63,
                "strength": 10,
                "speed": 100,
                "durability": 60,
                "power": 60,
                "combat": 32
                },
                "powers": [
                "Healing Factor",
                "Super Speed",
                "Phasing",
                "Super Endurance"
                ],
                "weaknesses": []
            },
            {
                "id": 5,
                "hero_name": "Iron Man",
                "real_name": "Tony Stark",
                "gender": "Male",
                "attributes": {
                "intelligence": 100,
                "strength": 85,
                "speed": 58,
                "durability": 85,
                "power": 100,
                "combat": 64
                },
                "powers": [
                "Flight",
                "Super-strength",
                "Super Suit"
                ],
                "weaknesses": [
                "Recharge Suit",
                "Mortal"
                ]
            },
            {
                "id": 6,
                "hero_name": "Spider Man",
                "real_name": "Peter Parker",
                "gender": "Male",
                "attributes": {
                "intelligence": 88,
                "strength": 55,
                "speed": 60,
                "durability": 74,
                "power": 58,
                "combat": 85
                },
                "powers": [
                "Spider Webs",
                "Super-strength",
                "Super Reflexes"
                ],
                "weaknesses": [
                "Mortal"
                ]
            },
            {
                "id": 7,
                "hero_name": "Daredevil",
                "real_name": "Mat Murdock",
                "gender": "Male",
                "attributes": {
                "intelligence": 75,
                "strength": 13,
                "speed": 27,
                "durability": 28,
                "power": 57,
                "combat": 95
                },
                "powers": [
                "Super Smell",
                "Super Touch",
                "Super Hearing",
                "Super Agility",
                "Human Radar"
                ],
                "weaknesses": [
                "Mortal",
                "Blindness",
                "Sense Limitations"
                ]
            },
            {
                "id": 8,
                "hero_name": "Captain Marvel",
                "real_name": "Billy Batson",
                "gender": "Male",
                "attributes": {
                "intelligence": 100,
                "strength": 100,
                "speed": 67,
                "durability": 95,
                "power": 62,
                "combat": 56
                },
                "powers": [
                "Spider Healing",
                "Super-strength",
                "Clairvoyance",
                "Eidetic Memory",
                "Energy Projection",
                "Flight",
                "Magic"
                ],
                "weaknesses": [
                "Partial Mortal"
                ]
            },
            {
                "id": 9,
                "hero_name": "Black Canary",
                "real_name": "Dinah Lance",
                "gender": "Female",
                "attributes": {
                "intelligence": 63,
                "strength": 8,
                "speed": 33,
                "durability": 15,
                "power": 62,
                "combat": 80
                },
                "powers": [
                "Canary Cry",
                "Martial Arts"
                ],
                "weaknesses": [
                "Mortal"
                ]
            },
            {
                "id": 10,
                "hero_name": "Hawkgirl",
                "real_name": "Kendra Saunders",
                "gender": "Female",
                "attributes": {
                "intelligence": 50,
                "strength": 28,
                "speed": 53,
                "durability": 99,
                "power": 74,
                "combat": 72
                },
                "powers": [
                "Nth Metal Enhancements",
                "Flight"
                ],
                "weaknesses": [
                "Mortal"
                ]
            },
            {
                "id": 11,
                "hero_name": "Captain America",
                "real_name": "Steven Rogers",
                "gender": "Male",
                "attributes": {
                "intelligence": 63,
                "strength": 19,
                "speed": 35,
                "durability": 56,
                "power": 55,
                "combat": 100
                },
                "powers": [
                "Peak Human Strength",
                "Peak Human Speed",
                "Peak Human Agility",
                "Peak Human Healing",
                "Martial Arts",
                "Master Sheild Fighter"
                ],
                "weaknesses": [
                "Mortal"
                ]
            }
        ];

        return (
            <div>
                <h1>Heros Page</h1>
                <HeroList heros={data} />
            </div>
        );
    }
}
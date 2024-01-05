let pronouns = ['my', 'your', 'their', 'his', 'her', 'its', 'our', 'one'];
let adjectives = ['amazing', 'colorful', 'dynamic', 'exquisite', 'majestic', 'stellar', 'vibrant', 'zesty'];
let nouns = ['adventure', 'breeze', 'cascade', 'equinox', 'harmony', 'oasis', 'serenity', 'zenith'];

function randomDomainNames(pronouns, adjectives, nouns) {
    let pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    return pronoun + adjective + noun + '.com';
}

let newDomainName = randomDomainNames(pronouns, adjectives, nouns);
console.log(newDomainName);
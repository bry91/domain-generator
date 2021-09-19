let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
const domainExt = ".com";

for (let i = 0; i < pronoun.length; i++) {
    const ei = pronoun[i];
    
    for (let j = 0; j < adj.length; j++) {
        const ej = adj[j];
        
        for (let k = 0; k < noun.length; k++) {
            const ek = noun[k];
            
            console.log(ei + ej + ek + domainExt);
            
        }
    }
}
import Images from '../Images/Images';

export function getImageForName(name) {
    const firstLetter = name[0].toUpperCase();

    // Check if it's a number
    if (/^\d+$/.test(firstLetter)) {
        return Images.hashtag;
    }
    
    // Return the image of the letter
    switch(firstLetter) {
        case 'A': return Images.letterA;
        case 'B': return Images.letterB;
        case 'C': return Images.letterC;
        case 'D': return Images.letterD;
        case 'E': return Images.letterE;
        case 'F': return Images.letterF;
        case 'G': return Images.letterG;
        case 'H': return Images.letterH;
        case 'I': return Images.letterI;
        case 'J': return Images.letterJ;
        case 'K': return Images.letterK;
        case 'L': return Images.letterL;
        case 'M': return Images.letterM;
        case 'N': return Images.letterN;
        case 'O': return Images.letterO;
        case 'P': return Images.letterP;
        case 'Q': return Images.letterQ;
        case 'R': return Images.letterR;
        case 'S': return Images.letterS;
        case 'T': return Images.letterT;
        case 'U': return Images.letterU;
        case 'V': return Images.letterV;
        case 'W': return Images.letterW;
        case 'X': return Images.letterX;
        case 'Y': return Images.letterY;
        case 'Z': return Images.letterZ;
        default: return Images.randomizer; // Shouldn't happen if regex is correct
    }
}
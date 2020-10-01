// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const toRna = (dna) => {

    let rna = ""

    for (let num = 0; num < dna.length; num++) {

        let char = dna.charAt(num)

        if (char == "G") {
            // To C
            rna = rna + "C"

        } else if (char == "C") {
            // To G
            rna = rna + "G"

        } else if (char == "T") {
            // to A
            rna = rna + "A"

        } else if (char == "A") {
            // To U
            rna = rna + "U"
        }
    }       // for each char
    return rna
};

/*

   * `d` -> `C`
   * `C` -> `G`
   * `T` -> `A`
   * `A` -> `U`

*/

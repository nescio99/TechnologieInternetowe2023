//Zadanie 1

const tabA = ["Zosia", "Marcin", "Kamil"];
const tabB = ["Ala", "Puszek", ...tabA , "Jan", "Karol" ];

const testRest = (a,b,c) => {
    return a+b+c;
}

const testRest2 = (a,b,c, ...params) => {
    console.log(params.length);

}

testRest2(1,2,3,4,5,6,7);

//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    isUserLogged: !state.isUserLogged,
    availableYears: state.availableYears.filter(el => el <= 1999)
}

console.log(state);
console.log(stateCopy);
console.log(state === stateCopy);
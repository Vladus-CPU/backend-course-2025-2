const currency = "USD";
const data_from = "20220707";
const data_to = "20220719";
const bankgov = "https://bank.gov.ua/"
const apiUrl = new URL("/NBU_Exchange/exchange_site", bankgov);
apiUrl.searchParams.set("valcode", currency);
apiUrl.searchParams.set("start", data_from);
apiUrl.searchParams.set("end", data_to);
apiUrl.searchParams.set("json", "");
console.log(apiUrl.toString());

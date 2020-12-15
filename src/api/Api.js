
const Basic_Api="https://disease.sh/v3/covid-19";
export default {
    getAll: async () => {
        const req = await fetch(`${Basic_Api}/all`);
        const json = await req.json();
        return json;
    },
    getAngola: async () => {
        const req = await fetch(`${Basic_Api}/countries?yesterday=true&sort=cases`);
        const json = await req.json();
        return json;
    },
    getAngolaPais: async () => {
        const req = await fetch(`${Basic_Api}/countries/angola?yesterday=true&sort=cases`);
        const json = await req.json();
        return json;
    },
    getPaisHistorico: async (country) => {
        const req = await fetch(`${Basic_Api}/historical/${country}?lastdays=31`);
        const json = await req.json();
        return json;
    }
};
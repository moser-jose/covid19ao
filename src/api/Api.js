const Basic_Api="https://disease.sh/v3/covid-19";
async function getAll  (){
        const req = await fetch(`${Basic_Api}/all`);
        const json = await req.json();
        return json;
};
async function getAngola(){
    const req = await fetch(`${Basic_Api}/countries?yesterday=true&sort=cases`);
    const json = await req.json();
    return json;
};
async function getAngolaPais(){
    const req = await fetch(`${Basic_Api}/countries/angola?yesterday=true&sort=cases`);
    const json = await req.json();
    return json;
};
async function getPaisHistorico (country){
    const req = await fetch(`${Basic_Api}/historical/${country}?lastdays=31`);
    const json = await req.json();
    return json;
} 

const Api = {
    getAll,
    getAngola,
    getAngolaPais,
    getPaisHistorico
  };

export default Api;
